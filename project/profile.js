function createProfile() {

    localStorage.setItem(
        "studentName",
        document.getElementById("studentName").value
    );

    localStorage.setItem(
        "collegeName",
        document.getElementById("collegeName").value
    );

    localStorage.setItem(
        "background",
        document.getElementById("background").value
    );

    localStorage.setItem(
        "achievements",
        document.getElementById("achievements").value
    );

    localStorage.setItem(
        "skills",
        document.getElementById("skills").value
    );

    localStorage.setItem(
        "email",
        document.getElementById("email").value
    );

    let file = document.getElementById("profilePhoto").files[0];

    if (file) {
        let reader = new FileReader();

        reader.onload = function(e) {
            localStorage.setItem(
                "profilePhoto",
                e.target.result
            );

            window.location.href =
                "profileoutput.html";
        };

        reader.readAsDataURL(file);
    } else {
        window.location.href =
            "profileoutput.html";
    }
}