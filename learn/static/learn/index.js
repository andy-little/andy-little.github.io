document.addEventListener('DOMContentLoaded', () => {
    const closeSidebar = document.querySelector('.close_btn');
    const sidebar = document.querySelector('.sidebar');
    const page = document.querySelector('.page_container');
    const toggleSidebar = document.querySelector('.fa-bars')

    closeSidebar.onclick = () => {
            sidebar.classList.add('sidebar_closed');
            page.classList.remove('sidebar-open');
            //openSidebar.classList.remove('hidden');
        } 
    toggleSidebar.onclick = () => {
        sidebar.classList.toggle('sidebar_closed');
        page.classList.toggle('sidebar-open');
        //openSidebar.classList.add('hidden');
    }

    const chapters = document.querySelectorAll('.chapter');

    chapters.forEach((chapter) => {
        const btn = chapter.querySelector('.chap_btn');
        btn.onclick = () => {
            chapters.forEach((item) => {
                if(item !== chapter) {
                    item.classList.remove('show_sub_chaps');
                }
            })
            chapter.classList.toggle('show_sub_chaps');
        }
    });
});