var projects = {
    sokoban: {
        id: 'sokoban',
        name: 'Sokoban',
        title: 'Better push those boxes',
        desc: 'a 2d game,push the boxes to the green targets to win',
        publishedAt: 1448693940000,
        labels: ['Matrixes', 'keyboard events'],
        link: '"https://www.google.co.il/"',
        img: '"C:\Users\Ori\Desktop\Studies\coding academy\week 4\gallery\ca-gallery-master\ca-gallery-master\img\portfolio"'

    },
    touchNums: {
        id: 'touch-nums',
        name: 'Touch-Nums',
        title: 'think quickly',
        desc: 'click the nums in an ascending order',
        labels: ['Matrixes', 'keyboard events']

    }
}




function renderProj(obj) {
    var str = '';
    for (proj in projects) {
        str += '<div class="portfolio-caption">\
        <h4>Threads</h4>\
                    <p class="text-muted">' + proj.desc + '</p>\
                  </div>\
                </div>\
                <div class="col-md-4 col-sm-6 portfolio-item">\
                  <a class="portfolio-link" data-toggle="modal" href=' + proj.link + '>\
                    <div class="portfolio-hover">\
                      <div class="portfolio-hover-content">\
                        <i class="fa fa-plus fa-3x"></i>\
                      </div>\
                    </div>\
                    <img class="img-fluid" src=' + proj.img + ' alt="">\
                  </a> '



    }
    var projRow = document.querySelector('projRow');
    projRow.innerHTML = str;
}

