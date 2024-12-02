let currentFloor = 1;

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Simulate login validation (In a real application, this should be done on the server)
    // DN: mending kasih pengondisian cuman username atau password tertentu yang bisa login
    // DN: contoh username == "user" && password == "user"
    if (username && password) {
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('home-page').classList.remove('hidden');
        showFloor(currentFloor);
    } else {
        alert('Silakan masukkan username dan password yang valid.');
    }
}

function logout() {
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('login-page').classList.remove('hidden');
}

function showFloor(floor) {
    currentFloor = floor;
    document.getElementById('floor-title').innerText = `LANTAI ${floor}`;
    const floorRooms = document.getElementById('floor-rooms');
    floorRooms.innerHTML = ''; // Clear previous rooms
    if (floor === 1) {
        floorRooms.innerHTML = `
            <div class="room available" onclick="selectRoom('Aula Utama')">Aula Utama</div>
            <div class="room available" onclick="selectRoom('Perpustakaan')">Perpustakaan</div>
            <div class="room available" onclick="selectRoom('Mushola')">Mushola</div>
            <div class="room available" onclick="selectRoom('Lab')">Lab</div>
        `;
    }  else if (floor === 3) {
        floorRooms.innerHTML = `
            <div class="room available" onclick="selectRoom('Ruang 301')">Ruang 301</div>
            <div class="room occupied" onclick="alert('Ruang 302 telah dipinjam.')">Ruang 302</div>
            <div class="room available" onclick="selectRoom('Ruang 303')">Ruang 303</div>
            <div class="room occupied" onclick="alert('Ruang 304 telah dipinjam.')">Ruang 304</div>
            <div class="room available" onclick="selectRoom('Ruang 305')">Ruang 305</div>
            <div class="room available" onclick="selectRoom('Ruang 306')">Ruang 306</div>
            <div class="room occupied" onclick="alert('Ruang 307 telah dipinjam.')">Ruang 307</div>
            <div class="room available" onclick="selectRoom('Ruang 308')">Ruang 308</div>
        `;
    } else if (floor === 4) {
        floorRooms.innerHTML = `
            <div class="room occupied" onclick="alert('Ruang 401 telah dipinjam.')">Ruang 401</div>
            <div class="room available" onclick="selectRoom('Ruang 402')">Ruang 402</div>
            <div class="room occupied" onclick="alert('Ruang 403 telah dipinjam.')">Ruang 403</div>
            <div class="room available" onclick="selectRoom('Ruang 404')">Ruang 404</div>
            <div class="room occupied" onclick="alert('Ruang 405 telah dipinjam.')">Ruang 405</div>
            <div class="room available" onclick="selectRoom('Ruang 406')">Ruang 406</div>
            <div class="room available" onclick="selectRoom('Ruang 407')">Ruang 407</div>
            <div class="room occupied" onclick="alert('Ruang 408 telah dipinjam.')">Ruang 408</div>
            <div class="room available" onclick="selectRoom('Ruang 409')">Ruang 409</div>
            <div class="room available" onclick="selectRoom('Ruang 410')">Ruang 410</div>
        `;
    }
}

function selectRoom(room) {
    document.getElementById('borrowed-room').value = room;
    showBorrowingForm();
}

function showBorrowingForm() {
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('borrowing-form').classList.remove('hidden');
}

function submitBorrowing() {
    const name = document.getElementById('borrower-name').value;
    const nim = document.getElementById('borrower-nim').value;
    const room = document.getElementById('borrowed-room').value;
    // Simulate submitting borrowing request
    if (name && nim && room) {
        alert(`Permohonan peminjaman untuk ${room} telah diajukan oleh ${name}.`);
        document.getElementById('borrowing-form').classList.add('hidden');
        document.getElementById('home-page').classList.remove('hidden');
    } else {
        alert('Silakan lengkapi semua field sebelum mengajukan peminjaman.');
    }
}

function showStatusPage() {
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('status-page').classList.remove('hidden');
}

function approveRequest(button) {
    const row = button.closest('tr');
    row.cells[3].innerText = 'Disetujui';
    row.classList.add('highlight');
}

function rejectRequest(button) {
    const row = button.closest('tr');
    row.cells[3].innerText = 'Ditolak';
    row.classList.add('highlight');
}

// DN: Function buat dropdown

function handleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }