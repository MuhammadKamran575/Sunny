const users_data = [
    {
        user_name: "Boss",
        user_id: 1,
        isActive: true,
    },
    {
        user_name: "Ahmad Gul",
        user_id: 2,
        isActive: true,
    },
    {
        user_name: "Bilal Shah",
        user_id: 3,
        isActive: true,
    },
    {
        user_name: "Ziad Khan",
        user_id: 4,
        isActive: false,
    },
    {
        user_name: "Muavia Khan",
        user_id: 5,
        isActive: false,
    },
    {
        user_name: "Ahsan",
        user_id: 6,
        isActive: false,
    },
    {
        user_name: "kami",
        user_id: 7,
        isActive: false,
    },
    {
        user_name: "Khizar Iqbal",
        user_id: 8,
        isActive: false,
    }
];

const all_active_cards = document.querySelector('.all_active_cards');
const all_inactive_cards = document.querySelector('.all_inactive_cards');
const activeUsersWrapper = document.querySelector('.active-users-wrapper');
const inActiveUsersWrapper = document.querySelector('.inactive-users-wrapper');


const renderActive = (users) => {
    return users.map(user => {
        return `
        <div class="user_card">
            <div class="user_name">${user.user_name}</div>
            <div class="user_status">Active </div>
            <div class="change_user_status" data-user-id=${user.user_id}>Deactivate the user!</div>
        </div>`
    });
};

const renderInactive = (users) => {
    return users.map((user) => {
        return `
        <div class="user_card">
            <div class="user_name">${user.user_name}</div>
            <div class="user_status pink">Inactive</div>
            <div class="change_user_status green" data-user-id=${user.user_id}>Activate the user!</div>
        </div>`
    });
};


function renderAllUser() {
    const active_users = users_data.filter((user) => user.isActive);
    const inactiveUsers = users_data.filter((user) => !user.isActive);
    all_active_cards.innerHTML = renderActive(active_users).join('');
    all_inactive_cards.innerHTML = renderInactive(inactiveUsers).join('');
    toggleUSerStatus()
}
renderAllUser()


function toggleUSerStatus() {
    const change_user_status_btn = document.querySelectorAll('.change_user_status');
    change_user_status_btn.forEach((button) => {
        const id = button.dataset.userId;
        const findedId = users_data.findIndex((user) => user.user_id == id)
        button.addEventListener('click', () => {
            users_data[findedId].isActive = !users_data[findedId].isActive;
            renderAllUser()
        });
    });
    if (all_active_cards.children.length === 0) {
        activeUsersWrapper.style.display = 'none';
    } else {
        activeUsersWrapper.style.display = 'block';
    }
    
    if (all_inactive_cards.children.length === 0) {
        inActiveUsersWrapper.style.display = 'none';
    } else {
        inActiveUsersWrapper.style.display = 'block';
    }
    
}

