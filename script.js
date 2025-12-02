// Extended hospitals data for infinite scroll
const allBrands = [
    { name: 'Doctors Hospital, Lahore', type: '🏥', desc: 'Premium multi-specialty hospital' },
    { name: 'Shaukat Khanum Memorial', type: '🏥', desc: 'Oncology & tertiary care center' },
    { name: 'Aga Khan University Hospital', type: '🏥', desc: 'Advanced medical services' },
    { name: 'Holy Family Hospital', type: '🏥', desc: 'Comprehensive healthcare provider' },
    { name: 'Pakistan Institute of Medical Sciences', type: '🏥', desc: 'Academic medical center' },
    { name: 'DiagnoLabs', type: '🔬', desc: 'Diagnostic & laboratory services' },
    { name: 'Jinnah Postgraduate Medical Centre', type: '🏥', desc: 'Teaching hospital & research' },
    { name: 'United Hospital', type: '🏥', desc: 'Multi-facility healthcare network' },
    { name: 'Medicana Hospital', type: '🏥', desc: 'Modern medical facilities' },
    { name: 'Al-Zahra Hospital', type: '🏥', desc: 'Specialized healthcare services' },
    { name: 'Lahore General Hospital', type: '🏥', desc: 'Public sector medical facility' },
    { name: 'Services Hospital', type: '🏥', desc: 'Defense & civilian healthcare' },
    { name: 'Mayo Hospital', type: '🏥', desc: 'Heritage teaching hospital' },
    { name: 'Ganga Ram Hospital', type: '🏥', desc: 'Cardiac & orthopedic center' },
    { name: 'Ziauddin Hospital', type: '🏥', desc: 'Private tertiary care' },
    { name: 'Indus Hospital', type: '🏥', desc: 'Affordable quality healthcare' },
    { name: 'Naseer Teaching Hospital', type: '🏥', desc: 'Medical education & care' },
    { name: 'National Hospital', type: '🏥', desc: 'Emergency & trauma center' },
    { name: 'KRL General Hospital', type: '🏥', desc: 'Industrial & community care' },
    { name: 'FMH Medical College', type: '🏥', desc: 'Academic medical institute' }
];

let brandsScrollIndex = 6; // Start after initial 6
const brandsPerLoad = 4;

function initBrandsScroll() {
    const brandsGrid = document.getElementById('brandsGrid');
    if (!brandsGrid) return;

    // Infinite scroll listener
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && brandsScrollIndex < allBrands.length) {
                loadMoreBrands();
            }
        });
    });

    // Create a sentinel element at the end of the grid
    const sentinel = document.createElement('div');
    sentinel.className = 'scroll-sentinel';
    brandsGrid.parentElement.appendChild(sentinel);
    observer.observe(sentinel);
}

function loadMoreBrands() {
    const brandsGrid = document.getElementById('brandsGrid');
    if (!brandsGrid || brandsScrollIndex >= allBrands.length) return;

    const endIndex = Math.min(brandsScrollIndex + brandsPerLoad, allBrands.length);
    
    for (let i = brandsScrollIndex; i < endIndex; i++) {
        const brand = allBrands[i];
        const card = document.createElement('div');
        card.className = 'brand-card';
        card.innerHTML = `
            <div class="brand-logo">${brand.type}</div>
            <h3>${brand.name}</h3>
            <p>${brand.desc}</p>
        `;
        brandsGrid.appendChild(card);
    }

    brandsScrollIndex = endIndex;
}

const hospitals = {
    'Doctors Hospital, Lahore': {
        id: 'dhl',
        city: 'Lahore',
        address: '152-G/1, Canal Bank, Johar Town, Lahore',
        phone: '(042) 111-222-342',
        email: 'info@doctorshospital.com.pk',
        beds: 200,
        departments: ['Cardiology', 'Dermatology', 'Orthopedic', 'Gynecology', 'Pediatrics', 'Neurology'],
        established: '1995',
        accreditation: 'JCIA Accredited'
    },
    'Evergreen Medical Complex': {
        id: 'emc',
        city: 'Lahore',
        address: 'Wapda Town, Lahore',
        phone: '03171777509',
        email: 'info@evergreenmedical.com.pk',
        beds: 250,
        departments: ['Cardiology', 'Gastroenterology', 'ENT', 'Pulmonology', 'Orthopedic', 'Gynecology'],
        established: '1998',
        accreditation: 'ISO Certified'
    },
    'Aga Khan University Hospital': {
        id: 'akuh',
        city: 'Karachi',
        address: 'Stadium Road, Karachi',
        phone: '(021) 111-222-333',
        email: 'info@akuh.edu.pk',
        beds: 550,
        departments: ['Cardiology', 'Dermatology', 'Gynecology', 'Pediatrics', 'Neurology', 'ENT'],
        established: '1985',
        accreditation: 'JCI Accredited'
    },
    'Holy Family Hospital': {
        id: 'hfh',
        city: 'Rawalpindi',
        address: 'Holy Family Hospital Road, Rawalpindi',
        phone: '(051) 555-6666',
        email: 'info@holyfamily.com.pk',
        beds: 300,
        departments: ['Cardiology', 'Orthopedic', 'Gastroenterology', 'Pulmonology', 'Pediatrics', 'Dermatology'],
        established: '1987',
        accreditation: 'ISO Certified'
    }
};

let currentHospital = null;

const doctors = {
    'Cardiology': [
        { name: "Dr. Muhammad Asim", specialty: "Cardiologist", experience: "15 years", fee: "Rs. 3000", rating: "4.8", availability: "Mon-Sat" },
        { name: "Dr. Sana Riaz", specialty: "Cardiologist", experience: "9 years", fee: "Rs. 2700", rating: "4.6", availability: "Wed-Mon" },
        { name: "Dr. Farhan Ahmed", specialty: "Cardiologist", experience: "12 years", fee: "Rs. 3200", rating: "4.7", availability: "Tue-Sat" },
        { name: "Dr. Aisha Nadeem", specialty: "Interventional Cardiologist", experience: "18 years", fee: "Rs. 3500", rating: "4.9", availability: "Mon-Fri" },
        { name: "Dr. Hamza Riaz", specialty: "Cardiologist", experience: "11 years", fee: "Rs. 2900", rating: "4.7", availability: "Tue-Sun" },
        { name: "Dr. Samina Khan", specialty: "Pediatric Cardiologist", experience: "13 years", fee: "Rs. 3100", rating: "4.8", availability: "Wed-Sat" }
    ],
    'Dermatology': [
        { name: "Dr. Ayesha Khan", specialty: "Dermatologist", experience: "12 years", fee: "Rs. 2500", rating: "4.9", availability: "Mon-Fri" },
        { name: "Dr. Nadia Shahid", specialty: "Dermatologist", experience: "8 years", fee: "Rs. 2300", rating: "4.7", availability: "Tue-Sat" },
        { name: "Dr. Zara Malik", specialty: "Cosmetic Dermatologist", experience: "10 years", fee: "Rs. 2800", rating: "4.8", availability: "Mon-Sat" },
        { name: "Dr. Fahad Hassan", specialty: "Dermatologist", experience: "14 years", fee: "Rs. 2600", rating: "4.6", availability: "Wed-Mon" },
        { name: "Dr. Hira Ahmed", specialty: "Pediatric Dermatologist", experience: "9 years", fee: "Rs. 2400", rating: "4.7", availability: "Tue-Fri" },
        { name: "Dr. Salman Iqbal", specialty: "Dermatologist", experience: "16 years", fee: "Rs. 2900", rating: "4.8", availability: "Mon-Thu" }
    ],
    'Orthopedic': [
        { name: "Dr. Ahmed Raza", specialty: "Orthopedic Surgeon", experience: "18 years", fee: "Rs. 3500", rating: "4.7", availability: "Mon-Sat" },
        { name: "Dr. Bilal Khan", specialty: "Orthopedic Surgeon", experience: "20 years", fee: "Rs. 4000", rating: "4.9", availability: "Mon-Fri" },
        { name: "Dr. Tariq Mahmood", specialty: "Spine Surgeon", experience: "15 years", fee: "Rs. 3800", rating: "4.8", availability: "Tue-Sat" },
        { name: "Dr. Saira Jamil", specialty: "Joint Replacement Specialist", experience: "12 years", fee: "Rs. 3300", rating: "4.6", availability: "Wed-Sun" },
        { name: "Dr. Usman Ali", specialty: "Sports Medicine Specialist", experience: "10 years", fee: "Rs. 3000", rating: "4.7", availability: "Mon-Fri" },
        { name: "Dr. Maryam Siddiqui", specialty: "Pediatric Orthopedic", experience: "13 years", fee: "Rs. 3200", rating: "4.8", availability: "Tue-Sat" }
    ],
    'Gynecology': [
        { name: "Dr. Fatima Malik", specialty: "Gynecologist", experience: "10 years", fee: "Rs. 2800", rating: "4.9", availability: "Tue-Sun" },
        { name: "Dr. Sara Iqbal", specialty: "Gynecologist", experience: "14 years", fee: "Rs. 3000", rating: "4.8", availability: "Mon-Sat" },
        { name: "Dr. Ambreen Qureshi", specialty: "Obstetrician", experience: "16 years", fee: "Rs. 3200", rating: "4.7", availability: "Wed-Mon" },
        { name: "Dr. Noor Fatima", specialty: "Fertility Specialist", experience: "12 years", fee: "Rs. 3500", rating: "4.9", availability: "Mon-Fri" },
        { name: "Dr. Rafia Yousaf", specialty: "Gynecologist", experience: "9 years", fee: "Rs. 2600", rating: "4.6", availability: "Tue-Sat" },
        { name: "Dr. Mehwish Ali", specialty: "High-Risk Pregnancy Specialist", experience: "15 years", fee: "Rs. 3300", rating: "4.8", availability: "Mon-Thu" }
    ],
    'Pediatrics': [
        { name: "Dr. Hassan Ali", specialty: "Pediatrician", experience: "14 years", fee: "Rs. 2200", rating: "4.8", availability: "Mon-Sat" },
        { name: "Dr. Zainab Hassan", specialty: "Pediatrician", experience: "11 years", fee: "Rs. 2400", rating: "4.7", availability: "Tue-Sun" },
        { name: "Dr. Adnan Karim", specialty: "Neonatologist", experience: "17 years", fee: "Rs. 2800", rating: "4.9", availability: "Mon-Fri" },
        { name: "Dr. Laiba Shahid", specialty: "Pediatric Allergist", experience: "10 years", fee: "Rs. 2500", rating: "4.6", availability: "Wed-Sat" },
        { name: "Dr. Kamran Javed", specialty: "Pediatrician", experience: "13 years", fee: "Rs. 2300", rating: "4.7", availability: "Tue-Fri" },
        { name: "Dr. Sobia Rafiq", specialty: "Child Development Specialist", experience: "12 years", fee: "Rs. 2600", rating: "4.8", availability: "Mon-Thu" }
    ],
    'Neurology': [
        { name: "Dr. Imran Malik", specialty: "Neurologist", experience: "16 years", fee: "Rs. 3500", rating: "4.8", availability: "Mon-Fri" },
        { name: "Dr. Mariam Shah", specialty: "Neurologist", experience: "13 years", fee: "Rs. 3200", rating: "4.6", availability: "Wed-Sun" },
        { name: "Dr. Faisal Ahmad", specialty: "Stroke Specialist", experience: "19 years", fee: "Rs. 3800", rating: "4.9", availability: "Mon-Sat" },
        { name: "Dr. Sadia Aziz", specialty: "Epilepsy Specialist", experience: "11 years", fee: "Rs. 3300", rating: "4.7", availability: "Tue-Fri" },
        { name: "Dr. Waqar Hussain", specialty: "Movement Disorder Specialist", experience: "14 years", fee: "Rs. 3400", rating: "4.8", availability: "Wed-Sat" },
        { name: "Dr. Amina Tariq", specialty: "Pediatric Neurologist", experience: "10 years", fee: "Rs. 3100", rating: "4.6", availability: "Mon-Thu" }
    ],
    'Gastroenterology': [
        { name: "Dr. Kashif Raza", specialty: "Gastroenterologist", experience: "17 years", fee: "Rs. 3300", rating: "4.7", availability: "Mon-Sat" },
        { name: "Dr. Hina Arif", specialty: "Gastroenterologist", experience: "10 years", fee: "Rs. 2900", rating: "4.5", availability: "Tue-Sat" },
        { name: "Dr. Naveed Akhtar", specialty: "Hepatologist", experience: "18 years", fee: "Rs. 3600", rating: "4.8", availability: "Mon-Fri" },
        { name: "Dr. Rubina Saeed", specialty: "Endoscopist", experience: "12 years", fee: "Rs. 3100", rating: "4.7", availability: "Wed-Sun" },
        { name: "Dr. Jahangir Khan", specialty: "Gastroenterologist", experience: "14 years", fee: "Rs. 3200", rating: "4.6", availability: "Tue-Fri" },
        { name: "Dr. Farah Naz", specialty: "Pediatric Gastroenterologist", experience: "11 years", fee: "Rs. 3000", rating: "4.7", availability: "Mon-Thu" }
    ],
    'ENT': [
        { name: "Dr. Usman Tariq", specialty: "ENT Specialist", experience: "12 years", fee: "Rs. 2600", rating: "4.8", availability: "Mon-Fri" },
        { name: "Dr. Rabia Malik", specialty: "ENT Specialist", experience: "9 years", fee: "Rs. 2400", rating: "4.6", availability: "Wed-Sun" },
        { name: "Dr. Aamir Shahzad", specialty: "Rhinologist", experience: "15 years", fee: "Rs. 2900", rating: "4.7", availability: "Mon-Sat" },
        { name: "Dr. Kiran Fatima", specialty: "Pediatric ENT", experience: "11 years", fee: "Rs. 2700", rating: "4.8", availability: "Tue-Fri" },
        { name: "Dr. Zahid Latif", specialty: "Head & Neck Surgeon", experience: "17 years", fee: "Rs. 3100", rating: "4.9", availability: "Wed-Sat" },
        { name: "Dr. Bushra Azam", specialty: "Audiologist", experience: "10 years", fee: "Rs. 2500", rating: "4.6", availability: "Mon-Thu" }
    ],
    'Pulmonology': [
        { name: "Dr. Shahid Hussain", specialty: "Pulmonologist", experience: "15 years", fee: "Rs. 3100", rating: "4.7", availability: "Mon-Sat" },
        { name: "Dr. Amna Saeed", specialty: "Pulmonologist", experience: "11 years", fee: "Rs. 2800", rating: "4.6", availability: "Tue-Sat" },
        { name: "Dr. Asif Mahmood", specialty: "Critical Care Specialist", experience: "18 years", fee: "Rs. 3400", rating: "4.8", availability: "Mon-Fri" },
        { name: "Dr. Shazia Bibi", specialty: "Sleep Medicine Specialist", experience: "13 years", fee: "Rs. 3000", rating: "4.7", availability: "Wed-Sun" },
        { name: "Dr. Rizwan Ahmed", specialty: "Interventional Pulmonologist", experience: "16 years", fee: "Rs. 3300", rating: "4.9", availability: "Tue-Fri" },
        { name: "Dr. Naila Habib", specialty: "Asthma & Allergy Specialist", experience: "12 years", fee: "Rs. 2900", rating: "4.6", availability: "Mon-Thu" }
    ]
};

let selectedDoctor = null;
let currentDepartment = null;

function showDoctors(department) {
    currentDepartment = department;
    const departmentDoctors = doctors[department];
    
    // Hide departments, show doctors
    document.getElementById('departmentsContainer').style.display = 'none';
    document.getElementById('departmentTitle').classList.add('hidden');
    document.getElementById('backBtn').classList.remove('hidden');
    document.getElementById('doctorsTitle').classList.remove('hidden');
    document.getElementById('selectedDeptName').textContent = department;
    
    const container = document.getElementById('doctorsContainer');
    container.classList.add('active');
    container.innerHTML = '';

    departmentDoctors.forEach(doctor => {
        const initial = doctor.name.split(' ')[1]?.charAt(0) || doctor.name.charAt(0);
        const card = document.createElement('div');
        card.className = 'doctor-card';
        card.innerHTML = `
            <div class="doctor-header">
                <div class="doctor-avatar">${initial}</div>
                <div class="doctor-info">
                    <h3>${doctor.name}</h3>
                    <div class="specialty">${doctor.specialty}</div>
                    <div class="experience">${doctor.experience} experience</div>
                </div>
            </div>
            <div class="doctor-details">
                <div class="detail-row">
                    <span class="detail-label">Consultation Fee:</span>
                    <span class="detail-value">${doctor.fee}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Rating:</span>
                    <span class="detail-value rating">★ ${doctor.rating}/5.0</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Available:</span>
                    <span class="detail-value">${doctor.availability}</span>
                </div>
            </div>
            <button class="book-btn" onclick='openBookingModal(${JSON.stringify(doctor)})'>Book Appointment</button>
        `;
        container.appendChild(card);
    });

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleBackButton() {
    if (currentHospital) {
        selectHospital(currentHospital);
    } else {
        showDepartments();
    }
}

function selectHospital(hospitalName) {
    currentHospital = hospitalName;
    const hospital = hospitals[hospitalName];
    const container = document.getElementById('departmentsContainer');
    const titleEl = document.getElementById('departmentTitle');
    const backBtn = document.getElementById('backBtn');
    const backBtnElem = document.querySelector('.back-btn button');

    if (!container || !titleEl) return;

    // Show departments for selected hospital
    container.style.display = 'grid';
    titleEl.innerHTML = `<h2>${hospitalName}</h2><p>Select a department at this hospital</p>`;
    backBtn.classList.remove('hidden');
    if (backBtnElem) backBtnElem.textContent = '← Back to Hospitals';
    backBtn.style.display = 'block';

    container.innerHTML = '';
    const deptList = hospital.departments;
    
    // Department icons mapping
    const deptIcons = {
        'Cardiology': '❤', 'Dermatology': '🩺', 'Orthopedic': '🦴', 'Gynecology': '👶',
        'Pediatrics': '🧸', 'Neurology': '🧠', 'Gastroenterology': '🔬', 'ENT': '👂', 'Pulmonology': '🫁'
    };
    const deptStyles = {
        'Cardiology': 'dept-cardiology', 'Dermatology': 'dept-dermatology', 'Orthopedic': 'dept-orthopedic',
        'Gynecology': 'dept-gynecology', 'Pediatrics': 'dept-pediatrics', 'Neurology': 'dept-neurology',
        'Gastroenterology': 'dept-gastro', 'ENT': 'dept-ent', 'Pulmonology': 'dept-pulmonology'
    };

    deptList.forEach(dept => {
        const card = document.createElement('div');
        card.className = 'department-card';
        card.innerHTML = `
            <div class="department-icon ${deptStyles[dept] || 'dept-cardiology'}">
                ${deptIcons[dept] || '🏥'}
            </div>
            <h3>${dept}</h3>
            <p>Specialists in this department</p>
        `;
        card.addEventListener('click', function() {
            showDoctorsForHospitalDept(hospitalName, dept);
        });
        container.appendChild(card);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showDoctorsForHospitalDept(hospitalName, department) {
    const container = document.getElementById('doctorsContainer');
    const titleEl = document.getElementById('selectedDeptName');
    const departmentTitleEl = document.getElementById('departmentTitle');
    const doctorsTitle = document.getElementById('doctorsTitle');
    const backBtn = document.getElementById('backBtn');
    const backBtnElem = document.querySelector('.back-btn button');

    document.getElementById('departmentsContainer').style.display = 'none';
    departmentTitleEl.classList.add('hidden');
    if (backBtn) backBtn.classList.remove('hidden');
    if (backBtnElem) backBtnElem.textContent = '← Back to Departments';
    if (doctorsTitle) doctorsTitle.classList.remove('hidden');
    if (titleEl) titleEl.textContent = `${department} - ${hospitalName}`;

    container.classList.add('active');
    container.innerHTML = '';

    const doctorList = doctors[department] || [];
    if (doctorList.length === 0) {
        container.innerHTML = '<p>No doctors found in this department.</p>';
        return;
    }

    doctorList.forEach(doctor => {
        const initial = doctor.name.split(' ')[1]?.charAt(0) || doctor.name.charAt(0);
        const card = document.createElement('div');
        card.className = 'doctor-card';
        card.innerHTML = `
            <div class="doctor-header">
                <div class="doctor-avatar">${initial}</div>
                <div class="doctor-info">
                    <h3>${doctor.name}</h3>
                    <div class="specialty">${doctor.specialty}</div>
                    <div class="experience">${doctor.experience} experience</div>
                </div>
            </div>
            <div class="doctor-details">
                <div class="detail-row">
                    <span class="detail-label">Consultation Fee:</span>
                    <span class="detail-value">${doctor.fee}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Rating:</span>
                    <span class="detail-value rating">★ ${doctor.rating}/5.0</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Available:</span>
                    <span class="detail-value">${doctor.availability}</span>
                </div>
            </div>
            <button class="book-btn" onclick='openBookingModal(${JSON.stringify(doctor)})'>Book Appointment</button>
        `;
        container.appendChild(card);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openBookingModal(doctor) {
    selectedDoctor = doctor;
    document.getElementById('bookingModal').style.display = 'block';
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('appointmentDate').setAttribute('min', today);
}

function closeModal() {
    document.getElementById('bookingModal').style.display = 'none';
}

function confirmBooking() {
    const name = document.getElementById('patientName').value;
    const phone = document.getElementById('patientPhone').value;
    const date = document.getElementById('appointmentDate').value;
    const time = document.getElementById('appointmentTime').value;

    if (!name || !phone || !date) {
        alert('Please fill in all required fields');
        return;
    }

    alert(`Appointment Confirmed!\n\nDoctor: ${selectedDoctor.name}\nPatient: ${name}\nDate: ${date}\nTime: ${time}\nFee: ${selectedDoctor.fee}\n\nYou will receive a confirmation SMS shortly.`);
    closeModal();
    
    // Reset form
    document.getElementById('patientName').value = '';
    document.getElementById('patientPhone').value = '';
    document.getElementById('appointmentDate').value = '';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('bookingModal');
    if (event.target == modal) {
        closeModal();
    }
}

// --- Client / Auth logic ---
function getUsers() {
    const u = localStorage.getItem('healzup_users');
    return u ? JSON.parse(u) : [];
}

function saveUsers(users) {
    localStorage.setItem('healzup_users', JSON.stringify(users));
}

function registerUser(user) {
    const users = getUsers();
    if (users.find(u => u.email === user.email)) {
        return { ok: false, message: 'User already exists' };
    }
    users.push(user);
    saveUsers(users);
    return { ok: true };
}

function loginUser(email, password) {
    const users = getUsers();
    const found = users.find(u => u.email === email && u.password === password);
    if (found) {
        localStorage.setItem('healzup_currentUser', JSON.stringify({ email: found.email, name: found.name }));
        return { ok: true, user: found };
    }
    return { ok: false };
}

// Attach event listeners for the auth pages (only if those elements exist)
document.addEventListener('DOMContentLoaded', function() {
    // Initialize infinite scroll for brands
    initBrandsScroll();

    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const toSignUp = document.getElementById('toSignUp');
    const signupBox = document.getElementById('signupBox');
    const authTitle = document.getElementById('authTitle');
    const searchBtn = document.getElementById('searchBtn');
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackListEl = document.getElementById('feedbackList');
    const joinForm = document.getElementById('joinForm');
    const joinButtons = document.querySelectorAll('.doctor-join');
    const backToLogin = document.getElementById('backToLogin');
    // Attach click to 'Join as Doctor' nav buttons
    joinButtons.forEach(b => b.addEventListener('click', function() { window.location.href = 'join.html'; }));

    // Join Doctor form
    if (joinForm) {
        joinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const app = {
                name: document.getElementById('docName').value.trim(),
                email: document.getElementById('docEmail').value.trim(),
                phone: document.getElementById('docPhone').value.trim(),
                specialty: document.getElementById('docSpecialty').value.trim(),
                hospital: document.getElementById('docHospital').value.trim(),
                date: new Date().toISOString()
            };
            saveDoctorApplication(app);
            document.getElementById('joinSuccess').style.display = 'block';
            joinForm.reset();
        });
    }

    // Search button
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const city = document.getElementById('searchCity')?.value || '';
            const query = document.getElementById('searchQuery')?.value || '';
            handleAdvancedSearch(city, query);
        });
    }

    if (toSignUp) {
        toSignUp.addEventListener('click', function() {
            if (signupBox) {
                signupBox.classList.remove('hidden');
                authTitle.textContent = 'Sign Up for HEALZUP';
            }
            const loginBox = document.getElementById('loginBox');
            if (loginBox) loginBox.classList.add('hidden');
        });
    }

    if (backToLogin) {
        backToLogin.addEventListener('click', function() {
            if (signupBox) signupBox.classList.add('hidden');
            const loginBox = document.getElementById('loginBox');
            if (loginBox) loginBox.classList.remove('hidden');
            if (authTitle) authTitle.textContent = 'Login to HEALZUP';
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const user = {
                name: document.getElementById('signupName').value.trim(),
                email: document.getElementById('signupEmail').value.trim(),
                phone: document.getElementById('signupPhone').value.trim(),
                password: document.getElementById('signupPassword').value
            };
            const res = registerUser(user);
            if (res.ok) {
                alert('Account created. You can now login.');
                signupForm.reset();
                if (loginForm) loginForm.querySelector('input[type="email"]').value = user.email;
                signupBox.classList.add('hidden');
                authTitle.textContent = 'Login to HEALZUP';
            } else {
                alert(res.message);
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value;
            const res = loginUser(email, password);
            if (res.ok) {
                alert('Logged in successfully as ' + res.user.name);
                window.location.href = 'index.html';
            } else {
                alert('Invalid credentials');
            }
        });
    }

    // Feedback form
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('feedbackName').value.trim();
            const email = document.getElementById('feedbackEmail').value.trim();
            const message = document.getElementById('feedbackMessage').value.trim();
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            saveFeedback({ name, email, message, date: new Date().toISOString() });
            document.getElementById('feedbackSuccess').style.display = 'block';
            feedbackForm.reset();
            renderFeedbackList();
        });
    }

    if (feedbackListEl) renderFeedbackList();

    // Render blogs if blogGrid exists
    renderBlogs();
    updateNavUser();
});

function showDepartments() {
    // Show departments, hide doctors
    currentHospital = null;
    document.getElementById('departmentsContainer').style.display = 'grid';
    document.getElementById('departmentTitle').classList.remove('hidden');
    document.getElementById('backBtn').classList.add('hidden');
    document.getElementById('doctorsTitle').classList.add('hidden');
    document.getElementById('doctorsContainer').classList.remove('active');
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateNavUser() {
    const user = localStorage.getItem('healzup_currentUser');
    if (!user) return;
    const u = JSON.parse(user);
    const loginLink = document.querySelector('.nav-actions .login');
    if (loginLink) {
        loginLink.textContent = `Hi, ${u.name.split(' ')[0]}`;
        loginLink.href = 'javascript:void(0)';
        loginLink.classList.remove('login');
        const logoutBtn = document.createElement('button');
        logoutBtn.className = 'btn logout';
        logoutBtn.style.marginLeft = '0.4rem';
        logoutBtn.textContent = 'Logout';
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('healzup_currentUser');
            window.location.reload();
        });
        loginLink.parentElement.appendChild(logoutBtn);
    }
}

function saveFeedback(item) {
    const l = localStorage.getItem('healzup_feedback');
    const arr = l ? JSON.parse(l) : [];
    arr.unshift(item);
    localStorage.setItem('healzup_feedback', JSON.stringify(arr));
}

function getFeedback() {
    const l = localStorage.getItem('healzup_feedback');
    return l ? JSON.parse(l) : [];
}

function renderFeedbackList() {
    const list = getFeedback();
    const el = document.getElementById('feedbackList');
    if (!el) return;
    el.innerHTML = '';
    if (list.length === 0) {
        el.innerHTML = '<p>No feedback yet.</p>';
        return;
    }
    list.forEach(f => {
        const card = document.createElement('div');
        card.className = 'feedback-card';
        card.style.background = 'white';
        card.style.padding = '1rem';
        card.style.borderRadius = '10px';
        card.style.marginBottom = '1rem';
        card.innerHTML = `<strong>${f.name}</strong> <small>(${new Date(f.date).toLocaleString()})</small><p>${f.message}</p>`;
        el.appendChild(card);
    });
}

/** Advanced search handling - filter by name, specialty, department, ratings */
function handleAdvancedSearch(city, query) {
    const q = (query || city || '').toLowerCase().trim();
    if (!q) {
        window.location.href = 'index.html';
        return;
    }

    const results = [];
    // Parse for rating (e.g., "rating:4.8" or "rating>4.5")
    const ratingMatch = q.match(/rating[>:]+(\d+\.?\d*)/);
    const minRating = ratingMatch ? parseFloat(ratingMatch[1]) : null;
    const searchQ = ratingMatch ? q.replace(/rating[>:]+\d+\.?\d*/i, '').trim() : q;

    for (const dept in doctors) {
        const list = doctors[dept];
        list.forEach(d => {
            let matches = false;
            const rating = parseFloat(d.rating);

            // Check rating filter
            if (minRating !== null) {
                matches = rating >= minRating;
            } else {
                matches = true;
            }

            // Check text filters
            if (matches && searchQ) {
                matches = d.name.toLowerCase().includes(searchQ) || 
                          d.specialty.toLowerCase().includes(searchQ) || 
                          dept.toLowerCase().includes(searchQ) ||
                          city.toLowerCase().includes(searchQ);
            }

            if (matches) {
                results.push({ ...d, department: dept, hospital: 'Doctors Hospital, Lahore' });
            }
        });
    }

    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('\\')) {
        renderAdvancedSearchResults(results, searchQ, minRating);
    } else {
        window.location.href = `index.html?query=${encodeURIComponent(q)}`;
    }
}

function renderAdvancedSearchResults(results, query, minRating) {
    const container = document.getElementById('doctorsContainer');
    const depCont = document.getElementById('departmentsContainer');
    const titleH2 = document.getElementById('selectedDeptName');
    const departmentTitleEl = document.getElementById('departmentTitle');
    const backBtn = document.getElementById('backBtn');
    const doctorsTitle = document.getElementById('doctorsTitle');
    
    if (depCont) depCont.style.display = 'none';
    if (departmentTitleEl) departmentTitleEl.classList.add('hidden');
    if (backBtn) backBtn.classList.remove('hidden');
    if (doctorsTitle) doctorsTitle.classList.remove('hidden');
    
    if (!container) {
        alert(`Search: Found ${results.length || 'no'} results.`);
        return;
    }

    const queryDisplay = minRating ? `Rating ≥ ${minRating}` : `"${query}"`;
    if (titleH2) titleH2.textContent = `Search Results for ${queryDisplay}`;
    container.classList.add('active');
    container.innerHTML = '';

    if (results.length === 0) {
        container.innerHTML = '<div class="doctor-card"><p>No doctors match your search criteria.</p></div>';
        return;
    }

    results.forEach(d => {
        const card = document.createElement('div');
        card.className = 'doctor-card';
        const initial = d.name.split(' ')[1]?.charAt(0) || d.name.charAt(0);
        card.innerHTML = `
            <div class="doctor-header">
                <div class="doctor-avatar">${initial}</div>
                <div class="doctor-info">
                    <h3>${d.name}</h3>
                    <div class="specialty">${d.specialty} — <small>${d.department}</small></div>
                    <div class="experience">${d.experience} experience</div>
                </div>
            </div>
            <div class="doctor-details">
                <div class="detail-row"><span class="detail-label">Consultation Fee:</span><span class="detail-value">${d.fee}</span></div>
                <div class="detail-row"><span class="detail-label">Rating:</span><span class="detail-value rating">★ ${d.rating}/5.0</span></div>
                <div class="detail-row"><span class="detail-label">Available:</span><span class="detail-value">${d.availability}</span></div>
            </div>
            <button class="book-btn" onclick='openBookingModal(${JSON.stringify(d)})'>Book Appointment</button>
        `;
        container.appendChild(card);
    });
}

/** Legacy search handling - filter across doctors data */
function handleSearch(city, query) {
    // Flatten doctors into results: include department
    const q = (query || city || '').toLowerCase().trim();
    if (!q) {
        // If no query, just show homepage departments
        window.location.href = 'index.html';
        return;
    }

    const results = [];
    for (const dept in doctors) {
        const list = doctors[dept];
        list.forEach(d => {
            const matches = d.name.toLowerCase().includes(q) || d.specialty.toLowerCase().includes(q) || dept.toLowerCase().includes(q);
            if (matches) {
                results.push({ ...d, department: dept });
            }
        });
    }

    // Show results view on the home page
    // Ensure we navigate to index and render results there
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('\\')) {
        renderSearchResults(results, q);
    } else {
        // navigate to index then re-run search
        window.location.href = `index.html?query=${encodeURIComponent(q)}`;
    }
}

function renderSearchResults(results, q) {
    // Reuse doctorsContainer to show results
    const container = document.getElementById('doctorsContainer');
    const depCont = document.getElementById('departmentsContainer');
    const titleH2 = document.getElementById('selectedDeptName');
    const departmentTitleEl = document.getElementById('departmentTitle');
    const backBtn = document.getElementById('backBtn');
    const doctorsTitle = document.getElementById('doctorsTitle');
    if (depCont) depCont.style.display = 'none';
    if (departmentTitleEl) departmentTitleEl.classList.add('hidden');
    if (backBtn) backBtn.classList.remove('hidden');
    if (doctorsTitle) doctorsTitle.classList.remove('hidden');
    if (!container) {
        alert('Search results: ' + (results.length || 'No') + ' matches found.');
        return;
    }
    if (titleH2) titleH2.textContent = `Search Results for "${q}"`;
    container.classList.add('active');
    container.innerHTML = '';

    if (results.length === 0) {
        container.innerHTML = '<div class="doctor-card"><p>No results found.</p></div>';
        return;
    }

    results.forEach(d => {
        const card = document.createElement('div');
        card.className = 'doctor-card';
        const initial = d.name.split(' ')[1]?.charAt(0) || d.name.charAt(0);
        card.innerHTML = `
            <div class="doctor-header">
                <div class="doctor-avatar">${initial}</div>
                <div class="doctor-info">
                    <h3>${d.name}</h3>
                    <div class="specialty">${d.specialty} — <small>${d.department}</small></div>
                    <div class="experience">${d.experience} experience</div>
                </div>
            </div>
            <div class="doctor-details">
                <div class="detail-row"><span class="detail-label">Consultation Fee:</span><span class="detail-value">${d.fee}</span></div>
                <div class="detail-row"><span class="detail-label">Rating:</span><span class="detail-value rating">★ ${d.rating}/5.0</span></div>
                <div class="detail-row"><span class="detail-label">Available:</span><span class="detail-value">${d.availability}</span></div>
            </div>
            <button class="book-btn" onclick='openBookingModal(${JSON.stringify(d)})'>Book Appointment</button>
        `;
        container.appendChild(card);
    });
}

// --- Blogs data/rendering ---
const blogs = [
    { id: 1, title: '5 ways to keep your heart healthy', excerpt: 'Simple, evidence-based tips to keep your heart in great condition.', author: 'Dr. Sara', date: '2025-11-01', content: 'Good heart care includes exercising, no smoking...' },
    { id: 2, title: 'Child nutrition checklist', excerpt: 'What your child should eat at each age to stay healthy and grow strong.', author: 'Dr. Imran', date: '2025-10-15', content: 'A balanced diet consists of...' },
    { id: 3, title: 'How to manage stress', excerpt: 'Stress affects your health. Learn healthy coping strategies.' , author: 'Dr. Ayesha', date: '2025-09-10', content: 'Try small changes: breathing, sleep, support...' }
];

function renderBlogs() {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;
    grid.innerHTML = '';
    blogs.forEach(b => {
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.innerHTML = `<h3>${b.title}</h3><p class="meta">${b.author} — ${b.date}</p><p>${b.excerpt}</p><button class="btn" onclick='openBlog(${b.id})'>Read More</button>`;
        grid.appendChild(card);
    });
}

function openBlog(id) {
    const blog = blogs.find(b => b.id === id);
    if (!blog) return;
    alert(`${blog.title}\n\n${blog.content}`);
}

// Check for query param on index page to auto-run search
if (window.location.search) {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('query');
    if (q) {
        // tiny delay while index loads
        window.addEventListener('load', function() { setTimeout(() => handleSearch('', q), 200); });
    }
}

// Save doctor join application
function saveDoctorApplication(app) {
    const l = localStorage.getItem('healzup_doc_applications');
    const arr = l ? JSON.parse(l) : [];
    arr.unshift(app);
    localStorage.setItem('healzup_doc_applications', JSON.stringify(arr));
}