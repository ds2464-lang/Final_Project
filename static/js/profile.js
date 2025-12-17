// Your JavaScript code can go here.
console.log("JavaScript loaded!");

// static/js/profile.js

function getAccessToken() {
  return localStorage.getItem("access_token");
}

/* ----------------------------
   Profile Update
----------------------------- */
document.getElementById("profile-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const payload = {
    first_name: document.getElementById("first_name").value,
    last_name: document.getElementById("last_name").value,
    email: document.getElementById("email").value,
    username: document.getElementById("username").value,
  };

  const response = await fetch("/users/me", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getAccessToken()}`
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();

  if (!response.ok) {
    alert(data.detail || "Profile update failed");
    return;
  }

  alert("Profile updated successfully");
});

/* ----------------------------
   Password Change
----------------------------- */
document.getElementById("password-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const payload = {
    current_password: document.getElementById("current_password").value,
    new_password: document.getElementById("new_password").value,
    confirm_new_password: document.getElementById("confirm_new_password").value,
  };

  const response = await fetch("/users/me/password", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getAccessToken()}`
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();

  if (!response.ok) {
    alert(data.detail || "Password update failed");
    return;
  }

  alert("Password updated successfully");
});
