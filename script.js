
// ===================================
// DATA MEMBER K-POP UNIVERSE
// ===================================

const groups = {
    ENHYPEN: [
        {
            nama: "Jungwon / Yang Jung-won",
            foto: "jungwon.jpg.jpeg",
            tanggalLahir: "9 February 2004",
            kewarganegaraan: "Korea Selatan",
            posisi: "Leader (Pemimpin), Vokalis, dan Penari",
            zodiak: "Aquarius"
        },
        {
            nama: "Jay / Park Jong-seong",
            foto: "jay.jpeg",
            tanggalLahir: "20 April 2002",
            kewarganegaraan: "Korea-Amerika ",
            posisi: "Rapper Utama, Penari Utama, dan Vokalis",
            zodiak: "Taurus"
        },
        {
            nama: "Jake / Sim Jae-yun",
            foto: "jake.jpeg",
            tanggalLahir: "15 November 2002",
            kewarganegaraan: "Korea-Australia",
            posisi: "Vokalis, Penari, dan Rapper",
            zodiak: "Scorpio"
        },
        {
            nama: "Sunghoon / Park Sung-hoon",
            foto: "sunghoon.jpeg",
            tanggalLahir: "8 Desember 2002",
            kewarganegaraan: "Korea Selatan",
            posisi: "Penari Utama dan Vokalis",
            zodiak: "Sagitarius"
        },
        {
            nama: "Sunoo / Kim Sun-oo",
            foto: "sunoo.jpeg",
            tanggalLahir: "24 Juni 2003",
            kewarganegaraan: "Korea Selatan",
            posisi: "Vokalis Utama",
            zodiak: "Cancer"
        },
        {
            nama: "Ni-ki / Nishimura Riki",
            foto: "niki minat.jpeg",
            tanggalLahir: "9 Desember 2005",
            kewarganegaraan: "Jepang",
            posisi: "Penari Utama, Rapper, dan Maknae (Anggota termuda)",
            zodiak: "Sagitarius"
        },
    ],

    CORTIS: [
        {
            nama: "Martin Edwards / Park Woo-joo",
            foto: "martin.jpeg",
            tanggalLahir: "20 Maret 2008",
            kewarganegaraan: "Korea-Canada",
            posisi: "Leader dan Vokalis Utama",
            zodiak: "Pisces"
        },
        {
            nama: "James Chao / Chao Yufan",
            foto: "james.jpeg",
            tanggalLahir: "14 Oktober 2005",
            kewarganegaraan: "Hong Kong / Thai-Taiwanese",
            posisi: "Penari Utama, Rapper, dan Vokalis",
            zodiak: "Libra"
        },
        {
            nama: "Kim Ju-hoon",
            foto: "juhoon.jpeg",
            tanggalLahir: "03 Januari 2008",
            kewarganegaraan: "Korea Selatan",
            posisi: "Vokalis dan Visual",
            zodiak: "Capricorn"
        },
        {
            nama: " Eom Seong-hyeon",
            foto: "sean.jpeg",
            tanggalLahir: "13 Januari 2009",
            kewarganegaraan: "Korea Selatan",
            posisi: "Vokalis Utama",
            zodiak: "Capricorn"
        },
        {
            nama: "Ahn Keon-ho",
            foto: "keonho.jpeg",
            tanggalLahir: "14 Februari 2009",
            kewarganegaraan: "Korea Selatan",
            posisi: "Vokalis dan Maknae (Anggota Termuda)",
            zodiak: "Aquarius"
        }
    ],

    LNGSHOT: [
        {
            nama: "Ohyul / Kwon Oh Yul",
            foto: "oyul.jpeg",
            tanggalLahir: "21 Januari 2006",
            kewarganegaraan: "Korea Selatan",
            posisi: "Leader dan Lead Vocalist",
            zodiak: "Aquarius"
        },
        {
            nama: "Ryul / Kim Ryul",
            foto: "irul.jpeg",
            tanggalLahir: "18 September 2006",
            kewarganegaraan: "Korea Selatan",
            posisi: "Main Rapper dan Sub Vocalis",
            zodiak: "Virgo"
        },
        {
            nama: "Woojin / Jung Woo Jin",
            foto: "ujin.jpeg",
            tanggalLahir: "08 Maret 2008",
            kewarganegaraan: "Korea Selatan",
            posisi: "Main Dancer, Lead Rapper dan Composer",
            zodiak: "Pisces"
        },
        {
            nama: "Louis / Louis Elliot Jiho Jourdain (Lim Ji Ho)",
            foto: "luwis.jpeg",
            tanggalLahir: "01 Mei 2010",
            kewarganegaraan: "Korea-Prancis",
            posisi: "Main Vocalist dan Maknae (Anggota Termuda)",
            zodiak: "Taurus"
        }
    ]
};


// ===================================
// MENAMPILKAN DAFTAR MEMBER
// ===================================

function showGroup(groupName) {
    const members = groups[groupName];

    const title = document.getElementById("member-title");
    const desc = document.getElementById("member-desc");
    const container = document.getElementById("member-container");

    title.textContent = groupName + " Members";
    desc.textContent = "Choose a member to see their identity card.";

    container.innerHTML = "";

    members.forEach((member, index) => {
        const card = document.createElement("div");
        card.className = "member-card";

        card.innerHTML = `
            <div class="member-photo">
                ${
                    member.foto
                    ? `<img src="${member.foto}" alt="${member.nama}">`
                    : `<div class="photo-placeholder">PHOTO</div>`
                }
            </div>

            <h3>${member.nama}</h3>
            <p>${groupName}</p>

            <button class="view-button">View Biodata</button>
        `;

        card.querySelector("button").addEventListener("click", () => {
            showBiodata(groupName, index);
        });

        container.appendChild(card);
    });

    document.getElementById("members").scrollIntoView({
        behavior: "smooth"
    });
}


// ===================================
// MENAMPILKAN KARTU IDENTITAS MEMBER
// ===================================

function showBiodata(groupName, memberIndex) {
    const member = groups[groupName][memberIndex];
    const container = document.getElementById("biodata-container");

    container.innerHTML = `
        <div class="identity-card">

            <div class="identity-header">
                <h3>K-POP UNIVERSE</h3>
                <p>MEMBER IDENTITY CARD</p>
            </div>

            <div class="identity-content">

                <div class="identity-photo">
                    ${
                        member.foto
                        ? `<img src="${member.foto}" alt="${member.nama}">`
                        : `<div class="photo-placeholder">YOUR PHOTO HERE</div>`
                    }
                </div>

                <div class="identity-info">
                    <p><strong>Nama:</strong> ${member.nama}</p>
                    <p><strong>Group:</strong> ${groupName}</p>
                    <p><strong>Tanggal Lahir:</strong> ${member.tanggalLahir}</p>
                    <p><strong>Kewarganegaraan:</strong> ${member.kewarganegaraan}</p>
                    <p><strong>Posisi:</strong> ${member.posisi}</p>
                    <p><strong>Zodiak:</strong> ${member.zodiak}</p>
                </div>

            </div>

            <div class="identity-footer">
                <p>OFFICIAL MEMBER PROFILE</p>
            </div>

        </div>
    `;

    document.getElementById("biodata").scrollIntoView({
        behavior: "smooth"
    });
}
