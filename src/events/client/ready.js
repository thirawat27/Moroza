module.exports = {
    name: 'ready',
    once: true,
    async execute(client){
        console.log(`พร้อมใช้งาน✅ ${client.user.tag} เข้าสู่ระบบและออนไลน์`);
    }
}