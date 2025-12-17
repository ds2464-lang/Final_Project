// Your JavaScript code can go here.
console.log("JavaScript loaded!");

// ----------------------------
// PROFILE UPDATE
// ----------------------------
const profileForm = document.getElementById("profile-form");

profileForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // prevent page reload

  const data = {
    first_name: document.getElementById("first_name").value,
    last_name: document.getElementById("last_name").value,
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
  };

  const token = localStorage.getItem("access_token");

  try {
    const response = await fetch("/users/me", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Profile updated successfully!");
    } else {
      const error = await response.json();
      alert("Error: " + error.detail);
    }
  } catch (err) {
    alert("Network error: " + err.message);
  }
});

// ----------------------------
// PASSWORD CHANGE
// ----------------------------
const passwordForm = document.getElementById("password-form");

passwordForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    current_password: document.getElementById("current_password").value,
    new_password: document.getElementById("new_password").value,
    confirm_new_password: document.getElementById("confirm_new_password").value
  };

  const token = localStorage.getItem("access_token");

  try {
    const response = await fetch("/users/me/password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Password changed successfully!");
      passwordForm.reset();
    } else {
      const error = await response.json();
      alert("Error: " + error.detail);
    }
  } catch (err) {
    alert("Network error: " + err.message);
  }
});

// ----------------------------
// PREFILL PROFILE FORM ON PAGE LOAD
// ----------------------------
window.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("access_token");

  try {
    const res = await fetch("/users/me", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    if (res.ok) {
      const user = await res.json();
      document.getElementById("first_name").value = user.first_name;
      document.getElementById("last_name").value = user.last_name;
      document.getElementById("username").value = user.username;
      document.getElementById("email").value = user.email;
    } else {
      console.log("Could not fetch user profile");
    }
  } catch (err) {
    console.log("Network error:", err);
  }
});
