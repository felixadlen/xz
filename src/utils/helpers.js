export function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function slugify(string) {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function generateCategoryData(categories) {
  let categoryData = [];
  categories.forEach((category) => {
    categoryData.push({
      name: category,
      slug: `${slugify(category)}`,
    });
  });
  return categoryData;
}

function loadHTML(url, id, callback) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      const container = document.getElementById(id);
      container.innerHTML = data;
      executeScripts(container);
      if (callback) callback();
    })
    .catch((err) => console.error(err));
}
