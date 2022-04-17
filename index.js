const RPC = require('discord-rpc')
const rpc = new RPC.Client({
    transport: 'ipc'
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "สวัสดี ชื่อเล่น nanpopth อายุ🤔 งานที่ทำ🤫 โสด🤪", //รายละเอียด
        state: "Youtube lofi hip hop radio - beats to relax/study to", //สถานะ
        largeImageKey: "Photo",//รูปขนาดใหญ่ ตัว id รูป
        largeImageText: "Code By nanpopth",//รายละเอียดเมื่อคลิกรูปขนาดใหญ่
        buttons : [{label : "Profile twitter" , url : "https://twitter.com/"},{label : "Youtube" , url : "https://www.youtube.com/"}] //ปุ่มกด
    })

    console.log("Database")
})

rpc.login({
    clientId: ' your clientId ' //เลขประจำตัว clientID
})