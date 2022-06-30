window.onload = function () {
   let ul = document.querySelectorAll('ul');
   let li = ul[0].childNodes;
   let span1 = li[3].childNodes[1];
   let span2 = li[5].childNodes[1];
   li[3].addEventListener('mouseover', function () {
      span1.className = 'dropdown open'
   })
   li[3].addEventListener('mouseout', function () {
      span1.className = 'dropdown'
   })
   li[5].addEventListener('mouseover', function () {
      span2.className = 'dropdown open'
   })
   li[5].addEventListener('mouseout', function () {
      span2.className = 'dropdown'
   })


   let box = document.getElementsByClassName("box");
   for (let i = 0; i < box.length; i++) {
      box[i].style.animation = 'dropdown ' + (0.5 + 0.5 * i) + 's forwards';
   }


   let row = document.getElementsByClassName("row")
   let col = row[0].childNodes[1].childNodes[1]
   let col1 = row[1].childNodes[1].childNodes[1]
   // console.log(row[1].offsetHeight)
   let offh = row[1].offsetTop - row[1].offsetHeight
   col.style.animation = 'row_left 2s forwards'
   row[0].childNodes[3].style.animation = 'row_right 2s forwards'
   document.addEventListener('scroll', function () {
      // console.log(window.pageYOffset)
      if (window.pageYOffset >= offh) {
         col1.style.animation = 'row_left 2s forwards'
         row[1].childNodes[3].style.animation = 'row_right 2s forwards'
      }
   })


   let serce = document.getElementsByClassName("serce")
   let ser = serce[0].childNodes[5].childNodes
   let ser_top = ser[3].offsetTop - ser[3].offsetHeight
   // console.log(ser_top)
   document.addEventListener('scroll', function () {
      for (let i = 0; i < ser.length; i++) {
         if (i == 3 || i == 5 || i == 7 || i == 9) {
            if (window.pageYOffset >= ser_top) {
               ser[i].style.animation = 'img 2s forwards'
            }
         }

      }
   })


   let stu = document.getElementsByClassName("student")
   // console.log(stu[0].childNodes[5])
   let num = stu[0].childNodes[5]
   let num_top = num.offsetTop - num.offsetHeight
   document.addEventListener('scroll', function () {
      if (window.pageYOffset >= num_top) {
         num.style.animation = 'img 2s forwards'
      }
   })


   let totop = document.getElementById('totop')
   let banner = document.getElementById('banner')
   let text = document.querySelectorAll('#text')
   // console.log(text)
   // console.log(banner.offsetHeight)
   totop.addEventListener('click', function () {
      window.scroll(0, 0)
   })
   document.addEventListener('scroll', function () {
      // console.log(window.pageYOffset)
      if (window.pageYOffset >= banner.offsetHeight) {
         for (let i = 0; i < text.length; i++) {
            text[i].style.color = '#000000'
         }
         totop.classList.add('ten_totop--float--show')
      } else {
         for (let i = 0; i < text.length; i++) {
            text[i].style.color = '#ffffff'
         }
         totop.classList.remove('ten_totop--float--show')
      }
   })


   let footer = document.getElementsByClassName("footer")
   // console.log(footer[0].childNodes[3])
   // console.log(footer[0].childNodes[7])
   // console.log(footer[0].childNodes[5])
   let footer_top = footer[0].offsetTop - footer[0].offsetHeight
   document.addEventListener('scroll', function () {
      if (window.pageYOffset >= footer_top) {
         footer[0].childNodes[3].style.animation = footer[0].childNodes[7].style.animation = 'row_left 2s forwards'
         footer[0].childNodes[5].style.animation = 'logo 2s forwards'
      }
   })

}

