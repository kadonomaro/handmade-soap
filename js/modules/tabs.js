export default function tabs(tabs, content, tabActiveClass, contentActiveClass) {
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(tab => {
                tab.classList.remove(tabActiveClass);
            });
            tab.classList.add(tabActiveClass);

            content.forEach(targetContent => {
                if (tab.dataset.index === targetContent.dataset.index) {
                    content.forEach(targetContent => {
                        targetContent.classList.remove(contentActiveClass);
                    });
                    targetContent.classList.add(contentActiveClass);
                }
            });

        });
    });

}