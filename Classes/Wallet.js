const { User } = require("discord.js")

/**
 * Manage a users wallet.
 */
class Wallet {
    /**
     * @param {User} user
     */
    constructor(user) {
        /** @type {User} */
        this.user = user;
    }

    /**
     * Add to the wallet.
     * @param {Number} amount
     */
    async add(amount = 0) {
        const bal = await this.user.balance();
        return this.user.balance(bal + amount);
    }

    /**
     * Subtract from the wallet.
     * @param {Number} amount
     */
    sub(amount = 0) {
        return this.add(-amount);
    }

    /**
     * @param {number} [amount=0]
     * @returns {Boolean}
     */
    async hasEnough(amount = 0) {
        const bal = await this.user.balance();
        return bal >= amount;
    }

    async balance() {
         return this.user.balance();
    }
}

module.exports = Wallet;
