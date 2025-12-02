# HEALZUP (Doctors Hospital mock site)

This is a small static website prototype for a clinic/hospital aggregator and appointment booking UI.

Files:
- `index.html` - Landing page with departments and doctors
- `login.html` - Dummy login/signup
- `blogs.html` - Blog list page
- `about.html` - About page
- `contact.html` - Contact + feedback form
- `style.css` - Main stylesheet
- `script.js` - Client-side functionality (localStorage-based auth, feedback, search, booking)

How to run:

Open `index.html` in a web browser (double click file or right click -> open with). For best results, serve with a simple local HTTP server to avoid cross-file linking quirks:

- Python 3:
```powershell
# Start a simple HTTP server from the directory
python -m http.server 8080; Start-Process http://localhost:8080
```

- Node.js (http-server):
```powershell
# from the project directory
npx http-server -p 8080
# open http://localhost:8080
```

Notes:
- The site uses localStorage for dummy user accounts and feedback. This is for demonstration only; do not use for production.
- Search filters across specialty, doctor name, and department.
- Appointment booking is a front-end confirmation only.
