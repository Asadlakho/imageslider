const pics = [
        "images/1.jpg",
        "images/2.jpg",
        "images/3.jpg",
      ];

      let i = 0;

      function change(step) {
        i = (i + step + pics.length) % pics.length;
        document.getElementById("pic").src = pics[i];
      }