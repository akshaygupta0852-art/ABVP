// School and college array

const schoolArray = [{
    name: "PM SHRI Kendriya Vidyalaya Panna",
    level: "School",
    type: "Government (Central)",
    affiliation: "CBSE",
    category: "Co-ed Secondary/Higher Secondary",
    location: "Benisagar Mohalla, Panna Tehsil"
  },
  {
    name: "Jawahar Navodaya Vidyalaya Panna",
    level: "School",
    type: "Government (Central/Boarding)",
    affiliation: "CBSE",
    category: "Co-ed Secondary/Higher Secondary",
    location: "Ramkhiriya, Janakpur, Panna Tehsil"
  },
  {
    name: "C. M. Rise School Panna",
    level: "School",
    type: "Government (State)",
    affiliation: "MP Board",
    category: "Exemplar Co-ed Higher Secondary",
    location: "Panna Town, Panna Tehsil"
  },
  {
    name: "Government Excellence School Panna",
    level: "School",
    type: "Government (State)",
    affiliation: "MP Board",
    category: "Exemplar Co-ed Higher Secondary",
    location: "Panna Town, Panna Tehsil"
  },
  {
    name: "Government Model School Panna",
    level: "School",
    type: "Government (State)",
    affiliation: "MP Board",
    category: "Co-ed Higher Secondary",
    location: "Chhatarpur Bypass Road, Panna Tehsil"
  },
  {
    name: "Lisieux Anand Higher Secondary School",
    level: "School",
    type: "Private",
    affiliation: "CBSE",
    category: "Co-ed English Medium",
    location: "NH-75, Irrigation Colony, Panna Tehsil"
  },
  {
    name: "Maharishi Vidya Mandir School",
    level: "School",
    type: "Private",
    affiliation: "CBSE",
    category: "Co-ed English Medium",
    location: "Padikheda Road, Janakpur, Panna Tehsil"
  },
  {
    name: "Blue Sky National School",
    level: "School",
    type: "Private",
    affiliation: "CBSE / State Board",
    category: "Co-ed English Medium",
    location: "Ajaygarh Bypass Road, Purana Panna"
  },
  {
    name: "Royal Public School",
    level: "School",
    type: "Private",
    affiliation: "State Board",
    category: "Co-ed Secondary",
    location: "SH 49, Benisagar Mohalla, Panna Tehsil"
  },
  {
    name: "St. Joseph Convent School",
    level: "School",
    type: "Private",
    affiliation: "State Board",
    category: "Co-ed Primary/Secondary",
    location: "Ranigunj Mohalla, Panna Tehsil"
  },
  {
    name: "National Public School",
    level: "School",
    type: "Private",
    affiliation: "State Board",
    category: "Co-ed Secondary",
    location: "Civil Line Road, Janakpur, Panna Tehsil"
  },
  {
    name: "Sri Aurobindo English Hr Sec School",
    level: "School",
    type: "Private",
    affiliation: "State Board",
    category: "Co-ed Higher Secondary",
    location: "Gandhi Chowk, Agra Mohalla, Panna Tehsil"
  },
  {
    name: "The Modern Public School",
    level: "School",
    type: "Private",
    affiliation: "State Board",
    category: "Co-ed Secondary",
    location: "Haripad-Chatterji Marg, Benisagar Mohalla, Panna Tehsil"
  },
  {
    name: "Gurukul High Secondary School",
    level: "School",
    type: "Private",
    affiliation: "State Board",
    category: "Co-ed Higher Secondary",
    location: "Raja Babu Colony, Janakpur, Panna Tehsil"
  },
  {
    name: "RP Excellence School",
    level: "School",
    type: "Private",
    affiliation: "State Board",
    category: "Co-ed Secondary",
    location: "Deendayal Upadhyay Nagar, Panna Tehsil"
  },
  {
    name: "The Mother Convent English School",
    level: "School",
    type: "Private",
    affiliation: "State Board",
    category: "Co-ed Primary/Middle",
    location: "Ajaygarh Road, Janakpur, Panna Tehsil"
  },
  {
    name: "Shree Maya Public School",
    level: "School",
    type: "Private",
    affiliation: "State Board",
    category: "Co-ed Primary/Middle",
    location: "Benisagar Mohalla, Panna Tehsil"
  },
  {
    name: "Maharaja Chhatrasal Residential School",
    level: "School",
    type: "Private",
    affiliation: "State Board",
    category: "Residential Co-ed Secondary",
    location: "Pahadi Kheda Road, Panna Tehsil"
  },
  {
    name: "Children Public Hr. Sec. School",
    level: "School",
    type: "Private",
    affiliation: "State Board",
    category: "Co-ed Higher Secondary",
    location: "Rani Bagh Road, Civil Line, Panna Tehsil"
  },
  {
    name: "D.A.V. Public School",
    level: "School",
    type: "Private/Corporate",
    affiliation: "CBSE",
    category: "Co-ed Secondary/Higher Secondary",
    location: "NMDC Diamond Mining Project, Majhgawan, Panna Tehsil"
  },

  // ==========================================
  // COLLEGES & INSTITUTES (Panna Tehsil)
  // ==========================================
  {
    name: "Government Chhatrasal Post Graduate College",
    level: "College",
    type: "Government",
    affiliation: "Maharaja Chhatrasal Bundelkhand University (MCBU)",
    category: "Degree College (Arts, Science, Commerce)",
    location: "Bus Stand Road, Benisagar Mohalla, Panna Town"
  },
  {
    name: "Government Girls Post Graduate College",
    level: "College",
    type: "Government",
    affiliation: "Maharaja Chhatrasal Bundelkhand University (MCBU)",
    category: "Degree College (Exclusively for Women)",
    location: "Bada Bazar, Kishor Ganj, Panna Town"
  },
  {
    name: "Government Polytechnic College Panna",
    level: "College",
    type: "Government",
    affiliation: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
    category: "Engineering & Technical Diploma",
    location: "Civil Line, Janakpur, Panna Town"
  },
  {
    name: "Swami Vivekanand Mahavidyalaya",
    level: "College",
    type: "Private",
    affiliation: "Maharaja Chhatrasal Bundelkhand University / NCTE",
    category: "Degree & Teacher Education (B.Ed/D.El.Ed)",
    location: "Indrapuri Colony, Near RSS Ground, Janakpur, Panna Town"
  },
  {
    name: "Maharishi Vidya Mandir Mahavidyalaya",
    level: "College",
    type: "Private",
    affiliation: "Maharaja Chhatrasal Bundelkhand University (MCBU)",
    category: "Degree College",
    location: "Janakpur Road, Panna Town"
  },
  {
    name: "Maharaja Chhatrasal Shiksha Mahavidyalaya",
    level: "College",
    type: "Private",
    affiliation: "NCTE Approved",
    category: "Teacher Training / Education",
    location: "Panna Road, Janakpur, Panna Town"
  },
  {
    name: "Vaishnav Mata Mahavidyalaya",
    level: "College",
    type: "Private",
    affiliation: "Maharaja Chhatrasal Bundelkhand University (MCBU)",
    category: "Degree College",
    location: "Civil Line Road, Benisagar Mohalla, Panna Town"
  },
  {
    name: "Maharaja Agrasen Mahavidyalaya",
    level: "College",
    type: "Private",
    affiliation: "Maharaja Chhatrasal Bundelkhand University (MCBU)",
    category: "Degree College",
    location: "Janakpur Road, Tikuriya Mohalla, Panna Town"
  },
  {
    name: "Sudama Paramedical & Nursing College",
    level: "College",
    type: "Private",
    affiliation: "M.P. Medical Science University (MPMSU)",
    category: "Medical / Nursing / Allied Health",
    location: "Agra Mohalla, Panna Town"
  },
  {
    name: "Panna Institute Of Computer Science",
    level: "College",
    type: "Private",
    affiliation: "Makhanlal Chaturvedi National University (MCU)",
    category: "IT & Computer Applications",
    location: "Janakpur Road, Panna Town"
  },
  {
    name: "Government ITI Panna",
    level: "College",
    type: "Government",
    affiliation: "NCVT / NCVET",
    category: "Vocational / Technical Training",
    location: "Panna Town"
  },
  {
    name: "Vaishnav Mata Private ITI",
    level: "College",
    type: "Private",
    affiliation: "NCVT",
    category: "Vocational / Technical Training",
    location: "Near NMDC Colony, Ranibagh, Panna Town"
  },
  {
    name: "Vishwakarma Private ITI",
    level: "College",
    type: "Private",
    affiliation: "NCVT",
    category: "Vocational / Technical Training",
    location: "Opposite Benisagar Pond, Hospital Road, Panna Town"
  },
  {
    name: "Vivekananda Private ITI",
    level: "College",
    type: "Private",
    affiliation: "NCVT",
    category: "Vocational / Technical Training",
    location: "Near RSS Ground, Indrapuri Colony, Panna Town"
  }]

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
const adminPanel = document.getElementById('adminPanelDialog');
const clsAdminPanel = document.getElementById('closeAdminPanelDialog');
const dataTable = document.getElementById('studentData');


// fetching data

async function getData() {
  let x = 0;
  const response = await fetch(`${port}/api/admin/fetchdata`,{
    method : 'GET'
  });
  const data = await response.json();
  console.log(data)
  dataTable.innerHTML += data.map((stu)=>{
    x++;
    return `<tr>
          <td class="serialNo">${x}.</td>
          <td class="tableName">${stu.name}</td>
          <td class="tableMobile">${stu.mobile}</td>
          <td class="tableSchool">${stu.schoolCollege}</td>
          <td class="tableAddress">${stu.address}, ${stu.pincode}</td>
        </tr>`
  }).join('');
}

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

// function of loading

function loader(load, btn){
  if(load == true){
    btn.disabled = true; // Disable the button while loading
    btn.textContent = "Submitting..."; // Change button text to indicate loading
    btn.style.backgroundColor = "#ccc"; // Change button color to indicate loading
    btn.style.cursor = "not-allowed"; // Change cursor to indicate loading
    btn.style.pointerEvents = "none"; // Prevent pointer events while loading
  }
  else{
    btn.disabled = false;
    btn.textContent = 'Submit';
    btn.style.backgroundColor = '#007bff';
    btn.style.cursor = 'pointer';
    btn.style.pointerEvents = 'all';
  }
}

// Member form submission event listener

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();
  let isLoading = true; // Set loading state to true
  loader(isLoading, submitButton)

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
      loader(isLoading, submitButton);
      console.log("Form submitted successfully");
      console.log("Response:", await response.json());
      memberDailog.close();
    }
    else{
      isLoading = false;
      loader(isLoading, submitButton);
      alert('This mobile number is already registered')
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
    getData();
    isLoading = false; // Set loading state to false
    console.log("Admin login successful");
    console.log("Response:", await response.json());
    adminPanel.showModal();
    adminLoginDialog.close();
  }}
  catch(err){
    console.error("Error during admin login:", err)
  }
});
clsAdminPanel.addEventListener('click',()=>{
  adminPanel.close();
});

