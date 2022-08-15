
let dataBlog = []
function addBlog(event){
    event.preventDefault()

    let title = document.getElementById("input-blog-title").value
    let startdate = document.getElementById("input-sdate").value
    let edate = document.getElementById("input-edate").value
    let content = document.getElementById("input-blog-content").value
    let image = document.getElementById("input-blog-image").files
console.log(title)
console.log(startdate)
console.log(edate)
console.log(content)
console.log(image)





    // untuk membuat url gambar, agar tampil
    image = URL.createObjectURL(image[0])

    let blog = {
        title,
        startdate,
        edate,
        content,
        image,
    }

    dataBlog.push(blog)
    console.log(blog)
    console.log(dataBlog);

    renderBlog()
}

function renderBlog(){
    
    document.getElementById("contents").innerHTML = ''

    // console.log(dataBlog);
    
    for (let index = 0; index < dataBlog.length; index++) {
        
        // console.log(dataBlog[index]);
        document.getElementById("contents").innerHTML += 

        `
        <div class="blog-list-item">
          <div class="blog-image">
            <img src="${dataBlog[index].image}" alt="" />
          </div>
          <div class="blog-content">
            
              <h1>
                <a class="judul-content" href="blog-detail.html" 
                target="_blank">${dataBlog[index].title}</a>
              </h1>
              
            <div class="detail-blog-content">
                durasi: 3 bulan
            </div>

            <div class="kalimat">
              <p>
              ${dataBlog[index].content}
              </p>
            </div>

            <!-- <i class "fa-brands fa-twitter"></i> -->
            <div class="logo-icon">
                <i class="fa-brands fa-react"></i>
                <i class="fa-brands fa-node-js"></i>
                <i class="fa-brands fa-java"></i>
                <i class="fa-brands fa-python"></i>
            </div>

            <div class="btn-group">
                <div class="btn-edit">
                  <button>edit</button>
                </div>
                
                <div class="btn-delete">
                  <button>delete</button>
                </div>
            </div>
           
          </div>
        </div>

        

      
        `
    }
}
