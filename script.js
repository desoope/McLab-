// --- CONFIG & DATA ---

// Список разрешенных ников и их роли
const WHITELIST = {
    'nikita2007558': { role: 'Гл. Модератор', isAdmin: true },
    'DesOope': { role: 'Модератор', isAdmin: true }, 
    '4epB9lk': { role: 'Тех. Админ', isAdmin: true },
    'Noise71': { role: 'Куратор', isAdmin: true },
    
    // Обычные сотрудники
    'Sashaiolh': { role: 'НеАдмин', isAdmin: false },
    'BobrKu': { role: 'Модератор', isAdmin: false },
    'Yamix': { role: 'Модератор', isAdmin: false },
    'GintaRus': { role: 'Дизайнер', isAdmin: true },
    'MrMaiK': { role: 'Строитель', isAdmin: false },
    '_artifev_': { role: 'Модератор', isAdmin: false }
};

// Товары
const ITEMS = [
    // Привилегии
    { id: 'priv_mod', name: '[Mod] на месяц', price: 270, img: 'priv_mod.png' },
    { id: 'priv_deluxe', name: '[Deluxe] на месяц', price: 185, img: 'priv_deluxe.png' },
    { id: 'priv_grand', name: '[Grand] на месяц', price: 130, img: 'priv_grand.png' },
    { id: 'priv_gold', name: '[Gold] на месяц', price: 95, img: 'priv_gold.png' },
    { id: 'priv_vip', name: '[Vip] на месяц', price: 50, img: 'priv_vip.png' },
    { id: 'priv_pro', name: '[Pro] на месяц', price: 20, img: 'priv_pro.png' },
    
    // Валюта и кейсы
    { id: 'money_100', name: '100 эмов', price: 15, img: 'ems.png' },
    { id: 'case_dragon', name: 'Dragon кейс', price: 40, img: 'case_dragon.png' },
    { id: 'case_sticker', name: 'Sticker кейс', price: 20, img: 'case_sticker.png' },
    { id: 'case_chance', name: 'Chance кейс', price: 20, img: 'case_chance.png' },
    { id: 'case_emerald', name: 'Изумрудный кейс', price: 8, img: 'case_emerald.png' },
    
    // Кастомизация
    { id: 'custom_perm', name: 'Кастомизация (навсегда)', price: 850, img: 'custom.png' },
    { id: 'skin_crystal', name: 'Чистый кристалл (скин)', price: 650, img: 'skin1.png' },
    { id: 'skin_void', name: 'Камень бездны (скин)', price: 650, img: 'skin2.png' },
    { id: 'staff_dragon', name: 'Посох дракона', price: 450, img: 'draconic_staff.png' },
    { id: 'skin_moon', name: 'Сияние Луны (скин)', price: 300, img: 'skin3.png' },
    { id: 'skin_vampire', name: 'Объятия вампира (скин)', price: 300, img: 'skin4.png' },
    
    // Draconic Evolution
    { id: 'uucs', name: 'UUCS', price: 200, img: 'uucs.png' },
    { id: 'drac_chest', name: 'Драконий нагрудник', price: 200, img: 'drac_chest.png' },
    { id: 'drac_pick', name: 'Драконья кирка', price: 150, img: 'drac_pick.png' },
    { id: 'custom_temp', name: 'Кастомизация (вайп)', price: 150, img: 'custom_temp.png' },
    { id: 'drac_bow', name: 'Лук дракона', price: 130, img: 'drac_bow.png' },
    { id: 'drac_sword', name: 'Драконий меч', price: 130, img: 'drac_sword.png' },
    { id: 'drac_cap', name: 'Драконий конденсатор', price: 100, img: 'drac_cap.png' },
    { id: 'drac_shovel', name: 'Драконья лопата', price: 100, img: 'drac_shovel.png' },
    { id: 'drac_axe', name: 'Драконий топор', price: 100, img: 'drac_axe.png' },
    { id: 'drac_helm', name: 'Драконий шлем', price: 100, img: 'drac_helm.png' },
    { id: 'drac_legs', name: 'Драконьи поножи', price: 100, img: 'drac_legs.png' },
    { id: 'drac_boots', name: 'Драконьи ботинки', price: 100, img: 'drac_boots.png' },
    
    // Wyvern & Misc
    { id: 'space_cable', name: 'Пространственный кабель', price: 90, img: 'cable.png' },
    { id: 'wyv_chest', name: 'Нагрудник виверны', price: 60, img: 'wyv_chest.png' },
    { id: 'sigil', name: 'Стабильный сигил', price: 50, img: 'sigil.png' },
    { id: 'wyv_helm', name: 'Шлем виверны', price: 50, img: 'wyv_helm.png' },
    { id: 'wyv_legs', name: 'Поножи виверны', price: 50, img: 'wyv_legs.png' },
    { id: 'wyv_boots', name: 'Ботинки виверны', price: 50, img: 'wyv_boots.png' },
    { id: 'wyv_pick', name: 'Кирка виверны', price: 50, img: 'wyv_pick.png' },
    { id: 'converter', name: 'Конвертер', price: 50, img: 'converter.png' },
    { id: 'uv_glasses', name: 'Ультрафиолетовые очки', price: 50, img: 'glasses.png' },
    { id: 'gravi_chest', name: 'Гравитационный нагрудник', price: 40, img: 'gravi.png' },
    { id: 'hologram', name: 'Голограмма', price: 30, img: 'holo.png' },
    { id: 'vajra', name: 'Ваджра', price: 25, img: 'vajra.png' },
    { id: 'relocator', name: 'Релокатор', price: 20, img: 'relocator.png' },
    { id: 'creative_proc', name: 'Творческий процессор', price: 20, img: 'proc.png' },
    { id: 'light_source', name: 'Источник света', price: 3, img: 'light.png' },
];

// --- FAKE DATA GENERATOR (Запускается если база пустая) ---
function getInitialData() {
    return [
        { nick: 'Sashaiolh', role: 'НеАдмин', isAdmin: false, balance: 89250, pass: '123' },
        { nick: '4epB9lk', role: 'Тех. Админ', isAdmin: true, balance: 0, pass: '123' },
        { nick: 'Noise71', role: 'Куратор', isAdmin: true, balance: 4001, pass: '123' },
        { nick: 'nikita2007558', role: 'Гл. Модератор', isAdmin: true, balance: 352, pass: '123' },
        { nick: 'GintaRus', role: 'Дизайнер', isAdmin: false, balance: 0, pass: '123' },
        { nick: 'MrMaiK', role: 'Строитель', isAdmin: false, balance: 315, pass: '123' },
        { nick: 'Yamix', role: 'Модератор', isAdmin: false, balance: 885, pass: '123' },
        { nick: '_artifev_', role: 'Модератор', isAdmin: false, balance: 160, pass: '123' },
        { nick: 'DesOope', role: 'Модератор', isAdmin: true, balance: 620, pass: '123' },
        { nick: 'BobrKu', role: 'Модератор', isAdmin: false, balance: 1280, pass: '123' }
    ];
}

function getFakeLogs() {
    const now = new Date();
    const yesterday = new Date(now); yesterday.setDate(now.getDate() - 1);
    const dayBefore = new Date(now); dayBefore.setDate(now.getDate() - 2);

    return [
        { actor: 'DesOope', text: 'DesOope купил Ультрафиолетовые очки за 50', time: now.toLocaleString() },
        { actor: 'nikita2007558', text: 'Изменил баланс Yamix: +200. Причина: Работа по форуму', time: now.toLocaleString() },
        { actor: 'BobrKu', text: 'BobrKu купил Драконий шлем за 100', time: yesterday.toLocaleString() },
        { actor: 'nikita2007558', text: 'Изменил баланс Noise71: +1000. Причина: Зарплата за месяц', time: yesterday.toLocaleString() },
        { actor: 'nikita2007558', text: 'Изменил баланс Sashaiolh: +50000. Причина: Победа в глобальном ивенте', time: dayBefore.toLocaleString() },
        { actor: 'Yamix', text: 'Yamix купил [Gold] на месяц за 95', time: dayBefore.toLocaleString() },
        { actor: 'nikita2007558', text: 'Изменил баланс BobrKu: +120. Причина: Премия за онлайн', time: dayBefore.toLocaleString() }
    ];
}

// --- DATABASE CLASS ---
class DB {
    constructor() {
        // Проверяем, есть ли данные. Если нет - грузим фейковые.
        if (!localStorage.getItem('mcskill_users')) {
            console.log("Initializing Fake Data...");
            this.users = getInitialData();
            this.logs = getFakeLogs();
            this.pendingOrders = [];
            this.save();
        } else {
            this.users = JSON.parse(localStorage.getItem('mcskill_users'));
            this.logs = JSON.parse(localStorage.getItem('mcskill_logs')) || [];
            this.pendingOrders = JSON.parse(localStorage.getItem('mcskill_orders')) || [];
        }
    }

    save() {
        localStorage.setItem('mcskill_users', JSON.stringify(this.users));
        localStorage.setItem('mcskill_logs', JSON.stringify(this.logs));
        localStorage.setItem('mcskill_orders', JSON.stringify(this.pendingOrders));
    }

    register(nick, pass) {
        if (!WHITELIST[nick]) return { success: false, msg: 'Ник не в белом списке!' };
        if (this.users.find(u => u.nick === nick)) return { success: false, msg: 'Уже зарегистрирован! (Попробуй войти)' };
        
        const newUser = {
            nick: nick,
            pass: pass,
            role: WHITELIST[nick].role,
            isAdmin: WHITELIST[nick].isAdmin,
            balance: 0
        };
        this.users.push(newUser);
        this.save();
        return { success: true, user: newUser };
    }

    login(nick, pass) {
        const user = this.users.find(u => u.nick === nick && u.pass === pass);
        return user || null;
    }

    getUser(nick) {
        return this.users.find(u => u.nick === nick);
    }

    updateBalance(adminNick, targetNick, amount, reason) {
        const user = this.users.find(u => u.nick === targetNick);
        if (!user) return false;
        
        user.balance = parseInt(user.balance) + parseInt(amount);
        this.logAction(adminNick, `Изменил баланс ${targetNick}: ${amount > 0 ? '+' : ''}${amount}. Причина: ${reason}`);
        this.save();
        return true;
    }

    createOrder(nick, item) {
        const user = this.users.find(u => u.nick === nick);
        if (user.balance < item.price) return { success: false, msg: 'Недостаточно баллов' };

        user.balance -= item.price;
        const order = {
            id: Date.now(),
            nick: nick,
            item: item.name,
            price: item.price,
            date: new Date().toLocaleString()
        };
        this.pendingOrders.push(order);
        this.logAction(nick, `${nick} купил ${item.name} за ${item.price}`);
        this.save();
        return { success: true };
    }

    confirmOrder(adminNick, orderId) {
        const index = this.pendingOrders.findIndex(o => o.id === orderId);
        if (index === -1) return;
        
        const order = this.pendingOrders[index];
        this.pendingOrders.splice(index, 1);
        this.save();
    }

    logAction(actor, text) {
        this.logs.unshift({
            actor: actor,
            text: text,
            time: new Date().toLocaleString()
        });
        this.save();
    }
}

const db = new DB();
let currentUser = null;
let selectedItem = null;
let selectedUserForEdit = null;

// --- AUTH LOGIC ---
const authScreen = document.getElementById('auth-screen');
const mainApp = document.getElementById('main-app');
const isRegMode = { value: false };

function toggleAuthMode() {
    isRegMode.value = !isRegMode.value;
    document.getElementById('confirm-pass-group').classList.toggle('hidden');
    document.querySelector('.toggle-auth').textContent = isRegMode.value ? "Уже есть аккаунт? Войти" : "Нет аккаунта? Регистрация";
    document.querySelector('#auth-screen .btn-primary').textContent = isRegMode.value ? "Зарегистрироваться" : "Войти";
}

function handleAuth() {
    const nick = document.getElementById('auth-nick').value.trim();
    const pass = document.getElementById('auth-pass').value.trim();
    
    if (!nick || !pass) return alert('Заполните все поля');

    if (isRegMode.value) {
        const conf = document.getElementById('auth-pass-confirm').value.trim();
        if (pass !== conf) return alert('Пароли не совпадают');
        
        const res = db.register(nick, pass);
        if (res.success) {
            alert('Регистрация успешна! Теперь войдите.');
            toggleAuthMode();
        } else {
            alert(res.msg);
        }
    } else {
        const user = db.login(nick, pass);
        if (user) {
            currentUser = user;
            initApp();
        } else {
            alert('Неверный логин или пароль (попробуйте 123 для предустановленных)');
        }
    }
}

function logout() {
    currentUser = null;
    authScreen.classList.remove('hidden');
    mainApp.classList.add('hidden');
    document.getElementById('auth-pass').value = '';
}

// --- APP LOGIC ---

function initApp() {
    authScreen.classList.add('hidden');
    mainApp.classList.remove('hidden');
    
    // Header Info
    document.getElementById('display-nick').textContent = currentUser.nick;
    document.getElementById('display-role').textContent = currentUser.role;
    updateBalanceDisplay();

    // Permissions
    if (currentUser.isAdmin) {
        document.getElementById('admin-notify').classList.remove('hidden');
    } else {
        document.getElementById('admin-notify').classList.add('hidden');
    }

    renderShop();
    renderUsers(); 
    renderLogs();
    checkNotifications();
    
    showScreen('shop'); 
}

function updateBalanceDisplay() {
    currentUser = db.getUser(currentUser.nick);
    document.getElementById('display-balance').textContent = currentUser.balance;
}

function showScreen(screenId) {
    document.querySelectorAll('.content-screen').forEach(s => s.classList.add('hidden'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    document.getElementById(screenId + '-screen').classList.remove('hidden');
    
    if(screenId === 'shop') document.querySelectorAll('.nav-btn')[0].classList.add('active');
    if(screenId === 'users') document.querySelectorAll('.nav-btn')[1].classList.add('active');
    if(screenId === 'logs') document.querySelectorAll('.nav-btn')[2].classList.add('active');

    if (screenId === 'admin-orders') renderOrders();
    if (screenId === 'users') renderUsers();
    if (screenId === 'logs') renderLogs();
}

// --- SHOP ---
function renderShop() {
    const container = document.getElementById('shop-container');
    container.innerHTML = '';
    
    ITEMS.forEach(item => {
        const el = document.createElement('div');
        el.className = 'item-card';
        el.innerHTML = `
            <img src="images/${item.img}" onerror="this.src='https://via.placeholder.com/100?text=Item'" class="item-img">
            <div class="item-name">${item.name}</div>
            <div class="item-price">${item.price} Б</div>
        `;
        el.onclick = () => openBuyModal(item);
        container.appendChild(el);
    });
}

function openBuyModal(item) {
    selectedItem = item;
    document.getElementById('modal-item-name').textContent = item.name;
    document.getElementById('modal-item-price').textContent = item.price;
    document.getElementById('modal-buy').classList.remove('hidden');
}

function confirmPurchase() {
    if (!selectedItem) return;
    const res = db.createOrder(currentUser.nick, selectedItem);
    
    if (res.success) {
        alert('Покупка совершена! Ожидайте выдачи.');
        updateBalanceDisplay();
        closeModal();
    } else {
        alert('Ошибка: ' + res.msg);
        closeModal();
    }
}

// --- USERS ---
function renderUsers() {
    const container = document.getElementById('users-list-container');
    container.innerHTML = '';
    
    // Сортировка: Админы -> Остальные по балансу
    const sortedUsers = [...db.users].sort((a, b) => {
        if (a.isAdmin && !b.isAdmin) return -1;
        if (!a.isAdmin && b.isAdmin) return 1;
        return b.balance - a.balance;
    });

    sortedUsers.forEach(user => {
        const el = document.createElement('div');
        el.className = 'user-row';
        
        let actions = '';
        if (currentUser.isAdmin) {
             actions = `<button class="btn-edit" onclick="openBalanceModal('${user.nick}')"><i class="fa-solid fa-pen"></i></button>`;
        }

        let roleColor = '#aaa';
        if (user.role.includes('Гл')) roleColor = '#ff453a';
        if (user.role.includes('Тех')) roleColor = '#bf5af2';
        if (user.role.includes('Куратор')) roleColor = '#0a84ff';
        if (user.role === 'НеАдмин') roleColor = '#32d74b';

        el.innerHTML = `
            <div>
                <div style="font-weight:700; font-size: 15px;">${user.nick}</div>
                <div style="font-size:12px; margin-top:2px;">
                    <span style="color:${roleColor}">${user.role}</span> | ${user.balance} Б
                </div>
            </div>
            ${actions}
        `;
        container.appendChild(el);
    });
}

function openBalanceModal(targetNick) {
    selectedUserForEdit = targetNick;
    document.getElementById('modal-target-user').textContent = `Пользователь: ${targetNick}`;
    document.getElementById('balance-amount').value = '';
    document.getElementById('balance-reason').value = '';
    document.getElementById('modal-balance').classList.remove('hidden');
}

function submitBalanceChange() {
    const amount = document.getElementById('balance-amount').value;
    const reason = document.getElementById('balance-reason').value;
    
    if (!amount || !reason) return alert('Заполните сумму и причину!');
    
    db.updateBalance(currentUser.nick, selectedUserForEdit, amount, reason);
    alert('Баланс обновлен');
    closeModal();
    renderUsers();
    updateBalanceDisplay();
}

// --- ORDERS ---
function renderOrders() {
    if (!currentUser.isAdmin) return;
    const container = document.getElementById('orders-container');
    container.innerHTML = '';
    
    if (db.pendingOrders.length === 0) {
        container.innerHTML = '<p style="text-align:center; opacity:0.5; padding:20px;">Нет новых заявок</p>';
        return;
    }

    db.pendingOrders.forEach(order => {
        const el = document.createElement('div');
        el.className = 'user-row';
        el.innerHTML = `
            <div>
                <div style="color: #ffd700; font-weight:bold">${order.item}</div>
                <div style="font-size:12px;">Покупатель: ${order.nick}</div>
            </div>
            <button class="btn-primary" style="width:auto; padding:8px 16px; margin:0; font-size:13px;" onclick="confirmOrder(${order.id})">Выдать</button>
        `;
        container.appendChild(el);
    });
}

function confirmOrder(id) {
    if(confirm('Подтвердить выдачу товара?')) {
        db.confirmOrder(currentUser.nick, id);
        renderOrders();
        checkNotifications();
    }
}

function checkNotifications() {
    if (!currentUser.isAdmin) return;
    const hasOrders = db.pendingOrders.length > 0;
    const dot = document.getElementById('notify-dot');
    if (hasOrders) dot.classList.remove('hidden');
    else dot.classList.add('hidden');
}

// --- LOGS ---
function renderLogs() {
    const container = document.getElementById('logs-container');
    container.innerHTML = '';
    
    db.logs.forEach(log => {
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

function closeModal() {
    document.querySelectorAll('.modal').forEach(m => m.classList.add('hidden'));
    selectedItem = null;
    selectedUserForEdit = null;
}
