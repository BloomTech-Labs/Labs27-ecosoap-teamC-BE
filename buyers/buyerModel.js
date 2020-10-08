const DB = require("../data/dbConfig.js")


module.exports = {
    postOrder,
    findOrder,
    findOrderById,
    updateOrder,
    deleteOrder,

}

function postOrder(order, buyerId) {
    return DB("order")
        .insert(order, buyerId)
        .then(ids => {
            return findOrder(ids[0])
        })
}

function findOrder(orderId) {
    return db("buyer as B")
        .join("order as O", "O.buyerId", "B.id" )
        .select("O.id", 
                "B.contactName",
                "B.email", 
                "B.organizationName",
                "B.contactPhone", 
                "O.contactName",
                "O.contactPhone",
                "O.organizationWebsite",
                "O.soapBarNum",
                "O.address",
                "O.address",
                "O.country",
                "O.beneficiariesNum",
                "O.hygieneSituation",
                "O.hygieneInitiative",
                "O.comments")
        .where("B.id", orderId)
        .orderBy("O.id")
}