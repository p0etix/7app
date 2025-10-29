const prayers = {
    prayer1: "Glory to God!",
    prayer2: "Arise O Lord! Save Me! OMG!",
    prayer3: "Most holy Theotokos protect us and save us.",
    prayer4: "May their hearts live forever.",
    prayer5: "Lord, hear my prayer and let my cry come unto you.",
    prayer6: "May the Lord bless you and keep you.",
    prayer7: "Lord Jesus Christ, Lamb of God, have mercy on me-forever. Amen."
};

function showPrayer(prayerId) {
    document.getElementById('prayer-display').innerHTML = `<p>${prayers[prayerId]}</p>`;
}
