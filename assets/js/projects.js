const projects = [
  { title: 'Hardware-Aware ML Accelerator', timeframe: '2024 · nanoDC Lab, IITGN' },
  { title: 'GenAI Language Assistant', timeframe: '2024 · Internship' },
  { title: 'Risk Insights Dashboard', timeframe: '2023 · Data Science' }
];

function renderProjects() {
  const container = document.getElementById('project-list');
  if (!container) return;

  projects.forEach((project) => {
    const item = document.createElement('li');
    item.className = 'project-item';

    const header = document.createElement('div');
    header.className = 'project-header';

    const titleHeading = document.createElement('h3');
    titleHeading.className = 'project-title';
    titleHeading.textContent = project.title;
    header.appendChild(titleHeading);

    if (project.timeframe) {
      const meta = document.createElement('span');
      meta.className = 'project-meta';
      meta.textContent = project.timeframe;
      header.appendChild(meta);
    }

    item.appendChild(header);
    container.appendChild(item);
  });
}

document.addEventListener('DOMContentLoaded', renderProjects);
