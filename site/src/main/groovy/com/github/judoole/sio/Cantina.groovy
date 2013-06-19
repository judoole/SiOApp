package com.github.judoole.sio

class Cantina {
    public String name
    public String urlId
    public String id

    static final List<Cantina> cantinas = [
            new Cantina(name: "Kafe Helga", urlId: "kafe%2Bhelga", id: 0),
            new Cantina(name: "AHO-kafeen", urlId: "aho", id: 1),
            new Cantina(name: "Annas spiseri", urlId: "annas%2Bspiseri", id: 2),
            new Cantina(name: "Forskningsveien", urlId: "forskningsveien", id: 3),
            new Cantina(name: "Frederikke kafe", urlId: "frederikke%2Bkafe%2Bmeny", id: 4),
            new Cantina(name: "Hannas spiseri", urlId: "hannas%2Bspiseri", id: 5),
            new Cantina(name: "InforMATeket", urlId: "informateket", id: 6),
            new Cantina(name: "Informatikkafeen", urlId: "informatikkafeen%2Bny", id: 7),
            new Cantina(name: "Kafe Athletica", urlId: "kafe%2Bathletica", id: 8),
            new Cantina(name: "Kafe Nova", urlId: "kafe%2Bnova", id: 9),
            new Cantina(name: "Kafe Ole", urlId: "kafe%2Bole", id: 10),
            new Cantina(name: "Kafe Seilduken", urlId: "kafe%2Bseilduken", id: 11),
            new Cantina(name: "Musikkhøgskolens kafe", urlId: "musikkhogskolens%2Bkafe%2Bny", id: 12),
            new Cantina(name: "Norges idrettshøgskoles kafe", urlId: "nih", id: 13),
            new Cantina(name: "Odontologikafeen", urlId: "odontologikafeen", id: 14),
            new Cantina(name: "Preklinisk kafe", urlId: "preklinisk%2Bkafe", id: 15),
            new Cantina(name: "Spiseriet P35", urlId: "spiseriet%2Bp35", id: 16),
            new Cantina(name: "SV kafeen", urlId: "sv%2Bkafeen%2Bny", id: 17),
            new Cantina(name: "Veterinærhøgskolens kafe", urlId: "veterinerhogskolen", id: 18)
    ]

    static Cantina fromId(String id){
        return cantinas.find { c -> c.id == id }
    }
}