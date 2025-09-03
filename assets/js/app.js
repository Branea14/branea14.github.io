import { projects } from "./featuredWork";

const grid = document.querySelector("#featured-work");

grid.innerHTML = projects.map(p => `
  <article class="project-card">
    ${p.image ? `
      <div class="project-image">
        <img src="${p.image}" alt="${p.projectName}" class="card-image">
      </div>` : ""}

    <div class="project-detail">
      <h5 class="card-title">${p.projectName}</h5>
      <p class="card-subtitle">${p.projectDesc}</p>
      ${p.projectTech ? `<p class="card-tech">${p.projectTech}</p>` : ""}

      ${p.footerLink?.length ? `
        <div class="project-card-footer">
          ${p.footerLink.map(l =>
            `<a class="project-tag" href="${l.url}" target="_blank" rel="noopener">${l.name}</a>`
          ).join("")}
        </div>` : ""}
    </div>
  </article>
`).join("");
