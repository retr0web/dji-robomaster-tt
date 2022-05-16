🇺🇦 Українська
<br>
Привіт.<br>
Це додаток для керування дроном Robomaster TT (Tello Talent), включає в себе як і панелі керування, так і керування клавіатурою, команди для модуля розширення, а також трансляцію відео з дрону.<br>
Додаток також підійде і для попередніх версій дронів лінійки Tello.<br><br>
Встановлення додатку:<br>
1. Скопіюйте проєкт через git<br>
```
git clone https://github.com/retr0web/dji-robomaster-tt.git
```
2. Відкрийте 2 вікна командного рядка (терміналу) та прокладіть шлях до папок frontend та backend
```
// Termianl 1
cd [path]/app/frontend

// Terminal 2
cd [path]/app/backend
```
3. Встановіть залежності в обох папках через npm install
4. Підключіться до Wi-Fi дрону (TELLO-XXXX)
5. Запустіть проєкт ввівши npm start в обох командних рядках<br>
Клієнт буде доступний за адресою localhost:7777<br>
<br>
🇬🇧 English 
<br>
Hi there.<br>
This is an app for controlling Robomaster TT (Tello Talent), includes control panels, control through keyboard, commands for extension module, and video stream from drone<br><br>
How to run the app: <br>
1. Copy the project with git <br>

```
git clone https://github.com/retr0web/dji-robomaster-tt.git
```

2. Open 2 terminal windows and set path to 2 folders: frontend and backend 
```
   // Termianl 1
   cd [path]/app/frontend

   // Terminal 2
   cd [path]/app/backend
```
3. Install dependencies in both folders with npm install
4. Connect to drone's Wi-Fi (TELLO-XXXX)
5. Run project with npm start in both terminals
Client will be avilable on localhost:7777
