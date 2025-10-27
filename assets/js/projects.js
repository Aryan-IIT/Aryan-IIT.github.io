const projects = [
  {
    title: 'Hardware-Aware ML Accelerator',
    timeframe: '2024 · nanoDC Lab, IITGN',
    description:
      'Researching compiler optimizations and scheduling strategies for domain-specific hardware accelerators tailored to transformer workloads.',
    links: [
      { label: 'Notes', url: '#' },
      { label: 'Code', url: '#' }
    ]
  },
  {
    title: 'GenAI Language Assistant',
    timeframe: '2024 · Internship',
    description:
      'Prototyped a multilingual conversational assistant that orchestrates retrieval-augmented generation pipelines for enterprise knowledge bases.',
    links: [
      { label: 'Case Study', url: '#' }
    ]
  },
  {
    title: 'Risk Insights Dashboard',
    timeframe: '2023 · Data Science',
    description:
      'Built an interactive analytics dashboard that surfaces leading indicators for credit risk using automated feature engineering and explainable models.',
    links: [
      { label: 'Demo', url: '#' }
    ]
  }
];

function renderProjects() {
  const container = document.getElementById('project-list');
  if (!container) return;

  projects.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card';

    const title = document.createElement('h3');
    title.textContent = project.title;
    card.appendChild(title);

    if (project.timeframe) {
      const meta = document.createElement('p');
      meta.className = 'project-meta';
      meta.textContent = project.timeframe;
      card.appendChild(meta);
    }

    if (project.description) {
      const body = document.createElement('p');
      body.textContent = project.description;
      card.appendChild(body);
    }

    if (project.links && project.links.length) {
      const linksRow = document.createElement('div');
      linksRow.className = 'project-links';
      project.links.forEach((link) => {
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.textContent = link.label;
        anchor.target = link.url.startsWith('http') ? '_blank' : '_self';
        anchor.rel = 'noopener';
        linksRow.appendChild(anchor);
      });
      card.appendChild(linksRow);
    }

    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderProjects);
