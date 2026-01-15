// --- 1. FIREBASE CONFIGURATION (ТВОЙ КОНФИГ) ---
const firebaseConfig = {
  apiKey: "AIzaSyCMnbM_9uCV_M4eryzqOuMwtR75OO8-A9w",
  authDomain: "mcskill-824c7.firebaseapp.com",
  databaseURL: "https://mcskill-824c7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mcskill-824c7",
  storageBucket: "mcskill-824c7.firebasestorage.app",
  messagingSenderId: "571555868674",
  appId: "1:571555868674:web:ae74b06a789c95b2ce771b",
  measurementId: "G-SPY9ZWFH5R"
};

// Инициализация Firebase (Compat version)
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// --- 2. CONSTANTS & ITEMS ---

const ITEMS = [
    // Привилегии
    { id: 'priv_mod', name: '[Mod] на месяц', price: 270, img: 'priv_mod.png', category: 'privilege' },
    { id: 'priv_deluxe', name: '[Deluxe] на месяц', price: 185, img: 'priv_deluxe.png', category: 'privilege' },
    { id: 'priv_grand', name: '[Grand] на месяц', price: 130, img: 'priv_grand.png', category: 'privilege' },
    { id: 'priv_gold', name: '[Gold] на месяц', price: 95, img: 'priv_gold.png', category: 'privilege' },
    { id: 'priv_vip', name: '[Vip] на месяц', price: 50, img: 'priv_vip.png', category: 'privilege' },
    { id: 'priv_pro', name: '[Pro] на месяц', price: 20, img: 'priv_pro.png', category: 'privilege' },
    // Валюта
    { id: 'money_100', name: '100 эмов', price: 15, img: 'ems.png', category: 'currency' },
    { id: 'case_dragon', name: 'Dragon кейс', price: 40, img: 'case_dragon.png', category: 'currency' },
    { id: 'case_sticker', name: 'Sticker кейс', price: 20, img: 'case_sticker.png', category: 'currency' },
    { id: 'case_chance', name: 'Chance кейс', price: 20, img: 'case_chance.png', category: 'currency' },
    { id: 'case_emerald', name: 'Изумрудный кейс', price: 8, img: 'case_emerald.png', category: 'currency' },
    // Draconic
    { id: 'staff_dragon', name: 'Посох дракона', price: 450, img: 'draconic_staff.png', category: 'draconic' },
    { id: 'drac_chest', name: 'Драконий нагрудник', price: 200, img: 'drac_chest.png', category: 'draconic' },
    { id: 'drac_pick', name: 'Драконья кирка', price: 150, img: 'drac_pick.png', category: 'draconic' },
    { id: 'drac_bow', name: 'Лук дракона', price: 130, img: 'drac_bow.png', category: 'draconic' },
    { id: 'drac_sword', name: 'Драконий меч', price: 130, img: 'drac_sword.png', category: 'draconic' },
    { id: 'drac_cap', name: 'Драконий конденсатор', price: 100, img: 'drac_cap.png', category: 'draconic' },
    { id: 'drac_shovel', name: 'Драконья лопата', price: 100, img: 'drac_shovel.png', category: 'draconic' },
    { id: 'drac_axe', name: 'Драконий топор', price: 100, img: 'drac_axe.png', category: 'draconic' },
    { id: 'drac_helm', name: 'Драконий шлем', price: 100, img: 'drac_helm.png', category: 'draconic' },
    { id: 'drac_legs', name: 'Драконьи поножи', price: 100, img: 'drac_legs.png', category: 'draconic' },
    { id: 'drac_boots', name: 'Драконьи ботинки', price: 100, img: 'drac_boots.png', category: 'draconic' },
    // Wyvern
    { id: 'wyv_chest', name: 'Нагрудник виверны', price: 60, img: 'wyv_chest.png', category: 'wyvern' },
    { id: 'wyv_helm', name: 'Шлем виверны', price: 50, img: 'wyv_helm.png', category: 'wyvern' },
    { id: 'wyv_legs', name: 'Поножи виверны', price: 50, img: 'wyv_legs.png', category: 'wyvern' },
    { id: 'wyv_boots', name: 'Ботинки виверны', price: 50, img: 'wyv_boots.png', category: 'wyvern' },
    { id: 'wyv_pick', name: 'Кирка виверны', price: 50, img: 'wyv_pick.png', category: 'wyvern' },
    // Tech
    { id: 'uucs', name: 'UUCS', price: 200, img: 'uucs.png', category: 'tech' },
    { id: 'space_cable', name: 'Пространственный кабель', price: 90, img: 'cable.png', category: 'tech' },
    { id: 'sigil', name: 'Стабильный сигил', price: 50, img: 'sigil.png', category: 'tech' },
    { id: 'converter', name: 'Конвертер', price: 50, img: 'converter.png', category: 'tech' },
    { id: 'uv_glasses', name: 'Ультрафиолетовые очки', price: 50, img: 'glasses.png', category: 'tech' },
    { id: 'gravi_chest', name: 'Гравитационный нагрудник', price: 40, img: 'gravi.png', category: 'tech' },
    { id: 'hologram', name: 'Голограмма', price: 30, img: 'holo.png', category: 'tech' },
    { id: 'vajra', name: 'Ваджра', price: 25, img: 'vajra.png', category: 'tech' },
    { id: 'relocator', name: 'Релокатор', price: 20, img: 'relocator.png', category: 'tech' },
    { id: 'creative_proc', name: 'Творческий процессор', price: 20, img: 'proc.png', category: 'tech' },
    { id: 'light_source', name: 'Источник света', price: 3, img: 'light.png', category: 'tech' },
    // Cosmetic
    { id: 'custom_perm', name: 'Кастомизация (навсегда)', price: 850, img: 'custom.png', category: 'cosmetic' },
    { id: 'custom_temp', name: 'Кастомизация (вайп)', price: 150, img: 'custom_temp.png', category: 'cosmetic' },
    { id: 'skin_crystal', name: 'Чистый кристалл (скин)', price: 650, img: 'skin1.png', category: 'cosmetic' },
    { id: 'skin_void', name: 'Камень бездны (скин)', price: 650, img: 'skin2.png', category: 'cosmetic' },
    { id: 'skin_moon', name: 'Сияние Луны (скин)', price: 300, img: 'skin3.png', category: 'cosmetic' },
    { id: 'skin_vampire', name: 'Объятия вампира (скин)', price: 300, img: 'skin4.png', category: 'cosmetic' },
];

const CATEGORY_TITLES = {
    'privilege': '<i class="fa-solid fa-crown"></i> Привилегии',
    'currency': '<i class="fa-solid fa-coins"></i> Валюта и Кейсы',
    'cosmetic': '<i class="fa-solid fa-shirt"></i> Скины и Кастомизация',
    'draconic': '<i class="fa-solid fa-dragon"></i> Draconic Evolution',
    'wyvern': '<i class="fa-solid fa-shield-halved"></i> Wyvern Evolution',
    'tech': '<i class="fa-solid fa-microchip"></i> Техника и Разное'
};
const CATEGORY_ORDER = ['privilege', 'currency', 'draconic', 'wyvern', 'tech', 'cosmetic'];

// --- 3. DATABASE LOGIC ---
let usersData = {};
let logsData = [];
let ordersData = [];
let currentUser = null;

// ДАННЫЕ ДЛЯ ПЕРВОГО ЗАПУСКА (GintaRus теперь Админ)
const INITIAL_USERS = {
    'nikita2007558': { role: 'Гл. Модератор', isAdmin: true, balance: 352, pass: '123' },
    'DesOope': { role: 'Модератор', isAdmin: true, balance: 620, pass: '123' },
    'GintaRus': { role: 'Гейм Дизайнер', isAdmin: true, balance: 0, pass: '123' }, // Добавлен в админы
    '4epB9lk': { role: 'Тех. Админ', isAdmin: true, balance: 0, pass: '123' },
    'Noise71': { role: 'Куратор', isAdmin: true, balance: 4001, pass: '123' },
    'Sashaiolh': { role: 'НеАдмин', isAdmin: false, balance: 89250, pass: '123' },
    'BobrKu': { role: 'Модератор', isAdmin: false, balance: 1280, pass: '123' },
    'Yamix': { role: 'Модератор', isAdmin: false, balance: 885, pass: '123' },
    'MrMaiK': { role: 'Строитель', isAdmin: false, balance: 315, pass: '123' },
    '_artifev_': { role: 'Модератор', isAdmin: false, balance: 160, pass: '123' }
};

// Запуск слушателей
database.ref('shop_data').on('value', (snapshot) => {
    const data = snapshot.val();
    
    if (!data) {
        // Если база пустая, заливаем INITIAL_USERS
        database.ref('shop_data').set({
            users: INITIAL_USERS,
            logs: [],
            orders: []
        });
        return;
    }

    usersData = data.users || {};
    logsData = data.logs || [];
    ordersData = data.orders || [];

    // Обновляем текущего юзера
    if (currentUser) {
        if (usersData[currentUser.nick]) {
            currentUser = { nick: currentUser.nick, ...usersData[currentUser.nick] };
            updateUI();
        } else {
            logout(); // Юзера удалили
        }
    }
    document.getElementById('loading-text').classList.add('hidden');
});

// --- 4. AUTH & NAVIGATION ---
const authScreen = document.getElementById('auth-screen');
const mainApp = document.getElementById('main-app');

function handleAuth() {
    const nick = document.getElementById('auth-nick').value.trim();
    const pass = document.getElementById('auth-pass').value.trim();
    
    if (!nick || !pass) return alert('Заполните все поля');

    // Проверка (теперь по загруженным данным из Firebase)
    if (Object.keys(usersData).length === 0) return alert('Данные загружаются... подождите пару секунд');

    const user = usersData[nick];
    if (user && user.pass === pass) {
        currentUser = { nick: nick, ...user };
        initApp();
    } else {
        alert('Неверный логин или пароль (попробуйте 123)');
    }
}

function logout() {
    currentUser = null;
    authScreen.classList.remove('hidden');
    mainApp.classList.add('hidden');
    document.getElementById('auth-pass').value = '';
}

function initApp() {
    authScreen.classList.add('hidden');
    mainApp.classList.remove('hidden');
    updateUI();
    showScreen('shop'); 
}

function updateUI() {
    document.getElementById('display-nick').textContent = currentUser.nick;
    document.getElementById('display-role').textContent = currentUser.role;
    document.getElementById('display-balance').textContent = currentUser.balance;

    if (currentUser.isAdmin) {
        document.getElementById('admin-notify').classList.remove('hidden');
        document.getElementById('btn-add-user').classList.remove('hidden');
    } else {
        document.getElementById('admin-notify').classList.add('hidden');
        document.getElementById('btn-add-user').classList.add('hidden');
    }

    renderShop();
    renderUsers(); 
    renderLogs();
    renderOrders();
    checkNotifications();
}

// --- 5. LOGIC (Покупки, Админка) ---

function createOrder(item) {
    if (currentUser.balance < item.price) return alert('Недостаточно баллов!');

    // Списание (Локально + Firebase)
    const newBalance = currentUser.balance - item.price;
    database.ref(`shop_data/users/${currentUser.nick}/balance`).set(newBalance);

    // Новая заявка
    const newOrder = {
        id: Date.now(),
        nick: currentUser.nick,
        item: item.name,
        price: item.price,
        date: new Date().toLocaleString()
    };
    const updatedOrders = [...ordersData, newOrder];
    database.ref('shop_data/orders').set(updatedOrders);

    // Лог
    logAction(currentUser.nick, `${currentUser.nick} купил ${item.name} за ${item.price}`);
    closeModal();
    alert('Покупка совершена! Ожидайте выдачи.');
}

// Управление персоналом
let selectedUserNick = null;

function openEditUserModal(nick) {
    selectedUserNick = nick;
    const user = usersData[nick];
    document.getElementById('modal-target-user').textContent = nick;
    document.getElementById('balance-amount').value = '';
    document.getElementById('balance-reason').value = '';
    document.getElementById('role-select').value = user.role;
    document.getElementById('modal-user-edit').classList.remove('hidden');
}

function submitUserChanges() {
    const amount = document.getElementById('balance-amount').value;
    const reason = document.getElementById('balance-reason').value;
    const newRole = document.getElementById('role-select').value;
    
    // Смена роли
    if (usersData[selectedUserNick].role !== newRole) {
        database.ref(`shop_data/users/${selectedUserNick}/role`).set(newRole);
        // Права админа даем вручную (пока упрощенно, можно доработать)
    }

    // Смена баланса
    if (amount && reason) {
        const currentBal = usersData[selectedUserNick].balance;
        const newBal = parseInt(currentBal) + parseInt(amount);
        database.ref(`shop_data/users/${selectedUserNick}/balance`).set(newBal);
        logAction(currentUser.nick, `Изменил баланс ${selectedUserNick}: ${amount > 0 ? '+' : ''}${amount}. Причина: ${reason}`);
    } else if (amount && !reason) {
        return alert('Укажите причину изменения баланса!');
    }
    closeModal();
}

function deleteUser() {
    if (confirm(`Удалить сотрудника ${selectedUserNick}?`)) {
        database.ref(`shop_data/users/${selectedUserNick}`).remove();
        logAction(currentUser.nick, `Удалил сотрудника ${selectedUserNick}`);
        closeModal();
    }
}

function openAddUserModal() {
    document.getElementById('new-user-nick').value = '';
    document.getElementById('new-user-pass').value = '';
    document.getElementById('new-user-role').value = 'Модератор';
    document.getElementById('new-user-admin').checked = false;
    document.getElementById('modal-add-user').classList.remove('hidden');
}

function submitNewUser() {
    const nick = document.getElementById('new-user-nick').value.trim();
    const pass = document.getElementById('new-user-pass').value.trim();
    const role = document.getElementById('new-user-role').value;
    const isAdmin = document.getElementById('new-user-admin').checked;

    if (!nick || !pass) return alert('Заполните Ник и Пароль');
    if (usersData[nick]) return alert('Такой сотрудник уже есть!');

    const newUser = {
        role: role,
        isAdmin: isAdmin,
        balance: 0,
        pass: pass
    };

    database.ref(`shop_data/users/${nick}`).set(newUser);
    logAction(currentUser.nick, `Добавил сотрудника ${nick} (${role})`);
    closeModal();
}

function confirmOrder(id) {
    if(confirm('Подтвердить выдачу товара?')) {
        const newOrders = ordersData.filter(o => o.id !== id);
        database.ref('shop_data/orders').set(newOrders);
    }
}

// --- 6. UTILS & RENDERS ---
function logAction(actor, text) {
    const newLog = { actor: actor, text: text, time: new Date().toLocaleString() };
    const updatedLogs = [newLog, ...logsData];
    database.ref('shop_data/logs').set(updatedLogs);
}

function closeModal() {
    document.querySelectorAll('.modal').forEach(m => m.classList.add('hidden'));
}

function renderShop() {
    const container = document.getElementById('shop-container');
    container.innerHTML = '';
    
    CATEGORY_ORDER.forEach(catKey => {
        const catItems = ITEMS.filter(item => item.category === catKey);
        if (catItems.length > 0) {
            const header = document.createElement('div');
            header.className = 'category-header';
            header.innerHTML = CATEGORY_TITLES[catKey] || catKey;
            
            const grid = document.createElement('div');
            grid.className = 'shop-grid';
            
            catItems.forEach(item => {
                const el = document.createElement('div');
                el.className = 'item-card';
                el.innerHTML = `
                    <img src="images/${item.img}" onerror="this.src='https://placehold.co/200/1a1a1a/FFF?text=IMG'" class="item-img">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">${item.price} Б</div>
                `;
                el.onclick = () => { selectedItem = item; openBuyModal(item); };
                grid.appendChild(el);
            });
            container.appendChild(header);
            container.appendChild(grid);
        }
    });
}

function openBuyModal(item) {
    document.getElementById('modal-item-name').textContent = item.name;
    document.getElementById('modal-item-price').textContent = item.price;
    document.getElementById('modal-buy').classList.remove('hidden');
}

function renderUsers() {
    const container = document.getElementById('users-list-container');
    container.innerHTML = '';
    
    // Превращаем объект в массив для сортировки
    const usersArray = Object.keys(usersData).map(key => ({ nick: key, ...usersData[key] }));
    const sortedUsers = usersArray.sort((a, b) => {
        if (a.isAdmin && !b.isAdmin) return -1;
        if (!a.isAdmin && b.isAdmin) return 1;
        return b.balance - a.balance;
    });

    sortedUsers.forEach(user => {
        const el = document.createElement('div');
        el.className = 'user-row';
        
        let actions = '';
        if (currentUser.isAdmin) {
             actions = `<button class="btn-icon" onclick="openEditUserModal('${user.nick}')"><i class="fa-solid fa-pen"></i></button>`;
        }

        let roleColor = '#aaa';
        if (user.role.includes('Гл')) roleColor = '#ff453a';
        if (user.role.includes('Тех')) roleColor = '#bf5af2';
        if (user.role.includes('Куратор')) roleColor = '#0a84ff';
        if (user.role === 'НеАдмин') roleColor = '#32d74b';

        el.innerHTML = `
            <div>
                <div style="font-weight:700; font-size: 16px;">${user.nick}</div>
                <div style="font-size:13px; margin-top:4px; opacity:0.8;">
                    <span style="color:${roleColor}">${user.role}</span> | <span style="color:#ffd700">${user.balance} Б</span>
                </div>
            </div>
            ${actions}
        `;
        container.appendChild(el);
    });
}

function renderLogs() {
    const container = document.getElementById('logs-container');
    container.innerHTML = '';
    logsData.forEach(log => {
        const el = document.createElement('div');
        let typeClass = '';
        if (log.text.includes('купил')) typeClass = 'buy';
        else if (log.text.includes('Изменил баланс') && log.text.includes('+')) typeClass = 'salary';
        else if (log.text.includes('Изменил баланс')) typeClass = 'admin';
        
        el.className = `log-entry ${typeClass}`;
        el.innerHTML = `
            <div style="font-weight:600; margin-bottom:2px;">${log.actor}</div>
            <div style="opacity:0.9">${log.text}</div>
            <span class="log-time">${log.time}</span>
        `;
        container.appendChild(el);
    });
}

function renderOrders() {
    if (!currentUser.isAdmin) return;
    const container = document.getElementById('orders-container');
    container.innerHTML = '';
    
    if (ordersData.length === 0) {
        container.innerHTML = '<p style="text-align:center; opacity:0.5; padding:20px;">Нет новых заявок</p>';
        return;
    }
    ordersData.forEach(order => {
        const el = document.createElement('div');
        el.className = 'user-row';
        el.innerHTML = `
            <div>
                <div style="color: #ffd700; font-weight:bold">${order.item}</div>
                <div style="font-size:12px;">Покупатель: ${order.nick}</div>
            </div>
            <button class="btn-primary" style="width:auto; padding:8px 16px; margin:0;" onclick="confirmOrder(${order.id})">Выдать</button>
        `;
        container.appendChild(el);
    });
}

function checkNotifications() {
    if (!currentUser.isAdmin) return;
    const hasOrders = ordersData.length > 0;
    const dot = document.getElementById('notify-dot');
    if (hasOrders) dot.classList.remove('hidden'); else dot.classList.add('hidden');
}

function showScreen(screenId) {
    document.querySelectorAll('.content-screen').forEach(s => s.classList.add('hidden'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(screenId + '-screen').classList.remove('hidden');
    
    if(screenId === 'shop') document.querySelectorAll('.nav-btn')[0].classList.add('active');
    if(screenId === 'users') document.querySelectorAll('.nav-btn')[1].classList.add('active');
    if(screenId === 'logs') document.querySelectorAll('.nav-btn')[2].classList.add('active');
}
