// School and college array

const schoolArray = [
  {
    name: "Government Chhatrasal Post Graduate College",
    type: "College",
    category: "Government",
    location: "Benisagar Mohalla, Panna",
    courses: ["UG", "PG", "Arts", "Science", "Commerce"],
  },
  {
    name: "Government Girls Post Graduate College",
    type: "College",
    category: "Government",
    location: "Panna Town",
    courses: ["UG", "PG", "Arts", "Commerce"],
  },
  {
    name: "Government Polytechnic College",
    type: "College",
    category: "Government",
    location: "Civil Line, Janakpur, Panna",
    courses: ["Diploma in Engineering"],
  },
  {
    name: "Government Degree College, Amanganj",
    type: "College",
    category: "Government",
    location: "Amanganj, Panna",
    courses: ["UG Degrees"],
  },
  {
    name: "Government College, Pawai",
    type: "College",
    category: "Government",
    location: "Pawai, Panna",
    courses: ["UG Degrees"],
  },
  {
    name: "Swami Vivekanand Mahavidyalaya",
    type: "College",
    category: "Private",
    location: "Janakpur, Panna",
    courses: ["UG Degrees", "Education/B.Ed"],
  },
  {
    name: "Maharaja Agrasen Mahavidyalaya",
    type: "College",
    category: "Private",
    location: "Janakpur Road, Panna",
    courses: ["UG Degrees"],
  },

  // --- SCHOOLS ---
  {
    name: "PM Shri Kendriya Vidyalaya (KV)",
    type: "School",
    category: "Central Government (CBSE)",
    location: "Bus Stand Road, Benisagar Mohalla, Panna",
    levels: "Primary to Senior Secondary",
  },
  {
    name: "Jawahar Navodaya Vidyalaya (JNV)",
    type: "School",
    category: "Central Government (CBSE)",
    location: "Gahra, Janakpur, Panna",
    levels: "Secondary to Senior Secondary",
  },
  {
    name: "Lisieux Anand Higher Secondary School",
    type: "School",
    category: "Private (CBSE/English Medium)",
    location: "NH-75, Irrigation Colony, Panna",
    levels: "Nursery to Senior Secondary",
  },
  {
    name: "DAV Public School",
    type: "School",
    category: "Private (CBSE)",
    location: "NMDC Diamond Mining Project, Majhgawan, Panna",
    levels: "Primary to Senior Secondary",
  },
  {
    name: "Maharishi Vidya Mandir",
    type: "School",
    category: "Private (CBSE)",
    location: "Padikheda Road, Janakpur, Panna",
    levels: "Primary to Senior Secondary",
  },
  {
    name: "National Public School",
    type: "School",
    category: "Private",
    location: "Civil Line Road, Janakpur, Panna",
    levels: "Primary to Higher Secondary",
  },
  {
    name: "Government Excellence School (RP Excellence)",
    type: "School",
    category: "State Government",
    location: "Panna Town",
    levels: "Secondary to Senior Secondary",
  },
  {
    name: "Sri Aurobindo English Higher Secondary School",
    type: "School",
    category: "Private",
    location: "Gandhi Chowk, Agra Mohalla, Panna",
    levels: "Primary to Higher Secondary",
  },
];

// About the ABVP organization

const abvpQuizData = [
  {
    id: 1,
    question: "What does ABVP stand for and what is its core ideology?",
    answer:
      "ABVP stands for Akhil Bharatiya Vidyarthi Parishad (All Indian Students' Council). Its core ideology is Hindutva (cultural nationalism), aimed at 'National Reconstruction' by aligning the educational system with traditional Indian values.",
  },
  {
    id: 2,
    question: "What is the official motto of ABVP?",
    answer:
      "The official motto of ABVP is 'Gyan, Sheel, Ekta', which translates to 'Knowledge, Character, Unity'.",
  },
  {
    id: 3,
    question:
      "What are the primary activities undertaken by ABVP on college campuses?",
    answer:
      "ABVP contests student union elections, advocates for educational reforms (like the National Education Policy), runs specialized wings like 'Mission Sahasi' (self-defense) and 'Think India', and organizes nationalistic campaigns and protests.",
  },
  {
    id: 4,
    question:
      "How does ABVP's 'Shikshik Parivar' concept influence its working methodology?",
    answer:
      "The 'Shikshik Parivar' (Educational Family) concept integrates both students and university professors/teachers into the organization's leadership structure. This minimizes traditional union-vs-authority friction and helps maintain strong institutional influence.",
  },
  {
    id: 5,
    question: "Who are 'Pracharaks' or 'Vistaraks' in the context of ABVP?",
    answer:
      "They are dedicated, full-time, unmarried volunteers who travel across different regions and reside near or on college campuses specifically to set up, manage, and expand new organizational units.",
  },
  {
    id: 6,
    question:
      "When was ABVP formally established and who was its key architect?",
    answer:
      "ABVP was initiated by RSS activists led by Balraj Madhok and formally registered on July 9, 1949. However, its modern organizational structure and core working methodologies were developed by Prof. Yashwantrao Kelkar, who joined in 1958 and is considered its true architect.",
  },
  {
    id: 7,
    question:
      "What historic political event in the 1970s heavily boosted ABVP's national footprint?",
    answer:
      "ABVP played a massive role in the anti-corruption Navnirman movement in Gujarat and the Bihar movement led by Jayaprakash Narayan. The mass arrest of its leaders during the 1975 Emergency transformed it from a campus group into a major mainstream political force.",
  },
];

// Port variable

let port = "http://localhost:5000"; // Default port for local development

// variable initialization

const aboutSection = document.getElementById("about");
const memberDailog = document.getElementById("memberDialog");
const submitButton = document.getElementById("memberSubmit");
const memberDailogOpen = document.getElementById("addMember");
const memberDailogClose = document.getElementById("closeDialog");
const schoolCollegeSelect = document.getElementById("schoolCollege");
const adminLoginButton = document.getElementById("adminPanel");
const adminLoginDialog = document.getElementById("adminLoginDialog");
const adminLoginClose = document.getElementById("closeAdminDialog");
const adminLoginSubmit = document.getElementById("adminSubmit");
const showPassword = document.getElementById("showPassword");
const adminPasswordInput = document.getElementById("adminPassword");

// add member dialog open and close event listeners

memberDailogOpen.addEventListener("click", () => {
  memberDailog.showModal();
});

memberDailogClose.addEventListener("click", () => {
  memberDailog.close();
});

// Populate school/college select options

schoolCollegeSelect.innerHTML += schoolArray
  .map(
    (item) =>
      `<option value="${item.name}">${item.name} (${item.type} - ${item.category})</option>`,
  )
  .join("");

// Populate about section with ABVP deep dive data

aboutSection.innerHTML += abvpQuizData
  .map(
    (item) =>
      `<div class="abvp-question">
        <h3>${item.question}</h3>
        <p>${item.answer}</p>
      </div>`,
  )
  .join("");

// Member form submission event listener

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();
  let isLoading = true; // Set loading state to true
  if (isLoading) {
    submitButton.disabled = true; // Disable the button while loading
    submitButton.textContent = "Submitting..."; // Change button text to indicate loading
    submitButton.style.backgroundColor = "#ccc"; // Change button color to indicate loading
    submitButton.style.cursor = "not-allowed"; // Change cursor to indicate loading
    submitButton.style.pointerEvents = "none"; // Prevent pointer events while loading
  }

  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobileNo").value;
  const address = document.getElementById("address").value;
  const schoolCollege = document.getElementById("schoolCollege").value;
  const pincode = document.getElementById("pincode").value;

  const userData = {
    name: name,
    mobile: mobile,
    address: address,
    schoolCollege: schoolCollege,
    pincode: pincode,
  };

  try {
    const response = await fetch(`${port}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (response.ok) {
      isLoading = false; // Set loading state to false
      console.log("Form submitted successfully");
      console.log("Response:", await response.json());
      memberDailog.close();
    }
  } catch (err) {
    console.error("Error submitting form:", err);
  }
});

// Admin login dialog open and close event listeners

adminLoginButton.addEventListener("click", () => {
  adminLoginDialog.showModal();
});
adminLoginClose.addEventListener("click", () => {
  adminLoginDialog.close();
});

// Show/hide password functionality

showPassword.addEventListener("change", () => {
  if (showPassword.checked) {
    adminPasswordInput.type = "text";
  } else {
    adminPasswordInput.type = "password";
  }
});

// Admin login form submission event listener

adminLoginSubmit.addEventListener("click", async (e) => {
  e.preventDefault();
  let isLoading = true; // Set loading state to true
  if (isLoading) {
    adminLoginSubmit.disabled = true; // Disable the button while loading
    adminLoginSubmit.textContent = "Logging in..."; // Change button text to indicate loading
    adminLoginSubmit.style.backgroundColor = "#ccc"; // Change button color to indicate loading
    adminLoginSubmit.style.cursor = "not-allowed"; // Change cursor to indicate loading
    adminLoginSubmit.style.pointerEvents = "none"; // Prevent pointer events while loading
  }
try{  const username = document.getElementById("adminMobile").value;
  const password = document.getElementById("adminPassword").value;

  const response = await fetch(`${port}/api/admin/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  if (response.ok) {
    isLoading = false; // Set loading state to false
    console.log("Admin login successful");
    console.log("Response:", await response.json());
    adminLoginDialog.close();
  }}
  catch(err){
    console.error("Error during admin login:", err)
  }
});
