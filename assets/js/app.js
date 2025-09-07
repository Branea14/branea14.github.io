import { projects } from "./featuredWork.js";

// const grid = document.querySelector("#featured-work");

// grid.innerHTML = projects.map(p => `
//   <article class="project-card">
//     ${p.image ? `
//       <div class="project-image">
//         <img src="${p.image}" alt="${p.projectName}" class="card-image">
//       </div>` : ""}

//     <div class="project-detail">
//       <h5 class="card-title">${p.projectName} ${p.private ? "🔒" : ""}</h5>
//       <p class="card-subtitle">${p.projectDesc}</p>
//       ${p.projectTech ? `<p class="card-tech">${p.projectTech}</p>` : ""}

//       ${p.footerLink?.length ? `
//         <div class="project-card-footer">
//           ${p.footerLink.map(l =>
//             `<a class="project-tag" href="${l.url}" target="_blank" rel="noopener">${l.name}</a>`
//           ).join("")}
//         </div>` : ""}
//     </div>
//   </article>
// `).join("");


function renderProjects() {
  const grid = document.querySelector("#featured-work");
  if (!grid) return;

  try {
    grid.innerHTML = projects.map(p => `
      <article class="project-card">
        ${p.image ? `
          <div class="project-image">
            <img src="${p.image}" alt="${p.projectName}" class="card-image">
          </div>` : ""}

        <div class="project-detail">
          <h5 class="card-title">${p.projectName} ${p.private ? "🔒" : ""}</h5>
          <p class="card-subtitle">${p.projectDesc}</p>
          ${p.projectTech ? `<p class="card-tech">${p.projectTech}</p>` : ""}
          ${Array.isArray(p.footerLink) && p.footerLink.length ? `
            <div class="project-card-footer">
              ${p.footerLink
                .filter(l => l && l.url)
                .map(l => `<a class="project-tag" href="${l.url}" target="_blank" rel="noopener">${l.name}</a>`)
                .join("")}
            </div>` : ""}
        </div>
      </article>
    `).join("");
  } catch (err) {
    console.error("Render failed:", err);
    grid.innerHTML = `<pre style="padding:12px;background:#111;color:#f66;white-space:pre-wrap;">${err.message}</pre>`;
  }
}

// Ensure DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderProjects);
} else {
  renderProjects();
}
