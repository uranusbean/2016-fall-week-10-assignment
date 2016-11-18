console.log('assignment 10');

var m = {t:50,r:50,b:50,l:50},
    w = document.getElementById('canvas').clientWidth - m.l - m.r,
    h = document.getElementById('canvas').clientHeight - m.t - m.b;

var plot = d3.select('.canvas')
    .append('svg')
    .attr('width', w + m.l + m.r)
    .attr('height', h + m.t + m.b)
    .append('g').attr('class','plot')
    .attr('transform','translate('+ m.l+','+ m.t+')');

//Mapping specific functions
//Projection
var projection = d3.geoMercator()
    .translate([w/2, h/2])
    .scale((w - 3) / (2 * Math.PI));

//Geopath
var pathGenerator = d3.geoPath()
    .projection(projection);
    
d3.json('../data/world-50m.json',dataloaded);

function dataloaded(err, data){
    console.log(data); //This is a Topojson data
    console.log(topojson.feature(data,data.objects.countries)); //This is the converted GeoJSON data of countries
    var countries = topojson.feature(data, data.objects.countries).features;
    
    projection
        .fitExtent([[0,0],[w,h]],data);  
    plot.selectAll(".country")  
        .data(countries)
        .enter().insert("path", ".graticule")
        .attr("d", pathGenerator);
      

}