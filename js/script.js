$('#search-button').on('click', function(){
    $.ajax({
        url : 'http://www.omdbapi.com/',
        dataType : 'json',
        type : 'GET',
        data : {
            'apikey' : '29c42c48',
            's' : $('#search-input').val()
        },
        success : function(result){
            if (result.Response == 'True'){
                var movies = result.Search;
                $.each(movies, function(i,data){
                    $('movie-list').append(`
                        <div class="card" style="width: 18rem;">
                            <img src="..." class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    `);
                });
            }else{
                $("#movie-list").html(`
                    <div class='col'>
                        <h1 class="text-center">`+result.Error+`</h1>
                    </div>`
                );
            }
        }
    })
});