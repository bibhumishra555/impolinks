const resources = [
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
        ]
    },
    {
        category: "Banking",
        links: [
            { name: "Quant", url: "https://youtube.com/playlist?list=PLpKGxj880QG2Yco-J3RiJAq8IZ81MOVaT&feature=shared" },
            { name: "English", url: "https://youtube.com/playlist?list=PLpKGxj880QG3A6v2CxWCzStcR_jaj6oNC&feature=shared" },
            { name: "Reasoning", url: "https://youtube.com/playlist?list=PLpKGxj880QG2XBnDvMVmUh_fF83FOgDxr&feature=shared" },
            { name: "G A", url: "https://youtube.com/playlist?list=PLpKGxj880QG2SqfgB9YxHD-_dZFl9QWvJ&feature=shared" },
            { name: "Current Affairs", url: "https://youtube.com/playlist?list=PLpKGxj880QG1Tb91uupEO6TctqMh5hrQQ&feature=shared" }
        ]
    },
    {
        category: "Productivity",
        links: [
            { name: "Geeks for Geeks", url: "https://www.geeksforgeeks.org" },
            { name: "Chat GPT", url: "https://chat.openai.com/" },
            { name: "Unsplash", url: "https://unsplash.com/" },
            { name: "Web Dev", url: "https://web.dev/" },
            { name: "Leet Code", url: "https://leetcode.com/" },
            { name: "Online Linux Server", url: "https://acceleratron.in/vm-linux-terminal" }
        ]
    }
];

function createResourceSection(category, links) {
    const section = document.createElement('div');
    section.className = 'classification-container';

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
    const resourceSection = createResourceSection(resource.category, resource.links);
    classificationDiv.appendChild(resourceSection);
});
