export const getPageVisits = (id) => {
    return JSON.parse(localStorage.getItem(`visit-${id}`)) || 0;
}

export const increasePageVisits = (id) => {
    localStorage.setItem(`visit-${id}`, JSON.stringify(getPageVisits(id) + 1))
}

// export const increasePageVisits = (id) => {
//     const pageVisits = JSON.parse(localStorage.getItem('page-visits')) || [];
//     const page = pageVisits.find(page => page.id === id);
//     page ? updateNewPageVisit(id) : addNewPageVisit(id);
// }

// export const getPageVisits = (id) => {
//     const pageVisits = JSON.parse(localStorage.getItem('page-visits')) || [];
//     const page = pageVisits.find(page => page.id === id) || { id, visits: 0};
//     return page.visits;
// }

// const addNewPageVisit = (id) => {
//     const pageVisits = JSON.parse(localStorage.getItem('page-visits')) || [];
//     const newPage = {id, visits: 1};
//     const updatedPageVisits = [...pageVisits, newPage];
//     localStorage.setItem('page-visits', JSON.stringify(updatedPageVisits));
// }

// const updateNewPageVisit = (id) => {
//     const pageVisits = JSON.parse(localStorage.getItem('page-visits')) || [];
//     const page = pageVisits.find(page => page.id === id);
//     const newPage = {id,  visits: page.visits + 1};
//     const updatedPageVisits = pageVisits.map(page => page.id === id ? newPage : page)
//     localStorage.setItem('page-visits', JSON.stringify(updatedPageVisits));
// }
