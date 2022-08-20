const invschema = require("../../models/inventoryschema");
 
module.exports = async (Discord, client, member) => {
    let profile = await invschema.create({
        userID: member.id,
        cash: 0,
        bank: 0,
        last_activity: "No hay movimientos",
        maxspacebag: "5",
        inventory: [],
        xp: 0,
        level: 0,
        pats: 0,
        rep: 0
    })
    profile.save()
}