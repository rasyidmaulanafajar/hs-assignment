(async () => {

    // Arrow Function
    const nama = () => "Rasyid";
    console.log("Nama saya : " + nama());
    
    // Promise Async / Await
    async function testAsync() {
        for(var i = 0; i < 5; i++) {
            console.log(i);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    
    await testAsync();
    
    // OOP
    class Kelas {
        constructor(nama) {
            this.nama = nama;
        }
    }
    
    class Murid extends Kelas {
        constructor(namaKelas) {
            super(namaKelas);
        }
    
        getKelas = () => this.nama;
    }
    
    const kelas = new Murid("ABC");
    console.log("Kelas : " + kelas.getKelas());

})();
