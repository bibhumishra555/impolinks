const resources = [
   
 {
        category: "Research",
        links: [
            { name: "Science direct", url: "https://www.sciencedirect.com/" },
            { name: "Springer", url: "https://link.springer.com/" },
            { name: "Scholar", url: "https://scholar.google.com/" },
            { name: "IEEE Xploer", url: "https://ieeexplore.ieee.org/Xplore/home.jsp" },
            { name: "Harward", url: "https://drodrik.scholar.harvard.edu/research-papers" },
            { name: "Nature", url: "https://www.nature.com/" },
            { name: "ARXIV", url: "https://arxiv.org/" },
            { name: "Nature", url: "https://www.nature.com/" },
            { name: "Elsevier", url: "https://www.elsevier.com/" },
            { name: "Nature", url: "https://www.nature.com/" },
            { name: "Mendeley", url: "https://www.mendeley.com/search/" },
            { name: "Nature", url: "https://www.nature.com/" },
            { name: "QiTiP", url: "https://qutip.org/" },
            { name: "Nature", url: "https://www.nature.com/" },
            { name: "Nature", url: "https://www.nature.com/" },// <-- Added this line
        ],
        animationClass: 'Research-animate'
    },
  

 {
        category: "BCA",
        links: [
            { name: "Syllabus", url: "https://lndcollege.co.in/syllabus/BCA_Syllabus.pdf" },
            { name: "Java by CWH", url: "https://youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&feature=shared" },
            { name: "Java by Apna college", url: "https://youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&feature=shared" },
            { name: "Linuxjourney", url: "https://linuxjourney.com/" },
            { name: "Bandit", url: "https://overthewire.org/wargames/bandit/bandit5.html" },
            { name: "Linux on Tech Mint", url: "https://www.tecmint.com/free-online-linux-learning-guide-for-beginners/" },
            { name: "Linux on GFG", url: "https://www.geeksforgeeks.org/linux-tutorial/" },
            { name: "Javatpoint", url: "https://www.javatpoint.com/java-tutorial" }
        ],
        animationClass: 'bca-animate'
    },
      {
        category: "Productivity",
        links: [
            { name: "Github", url: "https://github.com/" },
            { name: "Geeks for Geeks", url: "https://www.geeksforgeeks.org" },
            { name: "Chat GPT", url: "https://chat.openai.com/" },
            { name: "Co-pilot", url: "https://copilot.microsoft.com/?showconv=1" },
            { name: "Unsplash", url: "https://unsplash.com/" },
            { name: "Web Dev", url: "https://web.dev/" },
            { name: "Leet Code", url: "https://leetcode.com/" },
            { name: "Online Linux Server", url: "https://acceleratron.in/vm-linux-terminal" }
        ],
        animationClass: 'productivity-animate'
    }
];

function createResourceSection(category, links, animationClass) {
    const section = document.createElement('div');
    section.className = `classification-container ${animationClass}`;

    const title = document.createElement('h2');
    title.textContent = category;
    section.appendChild(title);

    const list = document.createElement('ul');
    list.className = 'link-list';
    
    links.forEach(link => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.textContent = link.name;
        listItem.appendChild(anchor);
        list.appendChild(listItem);
    });

    section.appendChild(list);
    return section;
}

const classificationDiv = document.getElementById('classification');
resources.forEach(resource => {
    const resourceSection = createResourceSection(resource.category, resource.links, resource.animationClass);
    classificationDiv.appendChild(resourceSection);
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.classification-container');
    sections.forEach(section => {
        section.style.opacity = '1';
    });
});
