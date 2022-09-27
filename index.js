const r=[...Array(8).keys()];

const chars=["Jago", "Sabrewulf", "Glacius", "Thunder", "Sadira", "Orchid", "Spinal", "Fulgore", "Shadow Jago", "TJ Combo", "Maya", "Kan-Ra", "Riptor", "Omen", "Aganos", "Hisako", "Cinder", "ARIA", "Kim Wu", "Tusk", "Arbiter", "Rash", "Mira", "Gargos", "General RAAM", "Eyedol", "Kilgore", "Shin Hisako", "Eagle"];
let d=document;
d.qs=d.querySelector;
var ct = ctl.map(x => `<option value="${x.name}">${x.name}</option>`).join("");

window.onload = () => {
  const ch = `
<option value="Jago">Jago</option>
<option value="Sabrewulf">Sabrewulf</option>
<option value="Glacius">Glacius</option>
<option value="Thunder">Thunder</option>
<option value="Sadira">Sadira</option>
<option value="Orchid">Orchid</option>
<option value="Spinal">Spinal</option>
<option value="Fulgore">Fulgore</option>
<option value="Shadow Jago">Shadow Jago</option>
<option value="TJ Combo">TJ Combo</option>
<option value="Maya">Maya</option>
<option value="Kan-Ra">Kan-Ra</option>
<option value="Riptor">Riptor</option>
<option value="Omen">Omen</option>
<option value="Aganos">Aganos</option>
<option value="Hisako">Hisako</option>
<option value="Cinder">Cinder</option>
<option value="ARIA">ARIA</option>
<option value="Kim Wu">Kim Wu</option>
<option value="Tusk">Tusk</option>
<option value="Arbiter">Arbiter</option>
<option value="Rash">Rash</option>
<option value="Mira">Mira</option>
<option value="Gargos">Gargos</option>
<option value="General RAAM">General RAAM</option>
<option value="Eyedol">Eyedol</option>
<option value="Kilgore">Kilgore</option>
<option value="Shin Hisako">Shin Hisako</option>
<option value="Eagle">Eagle</option>
  `

  r.forEach(p => {
    let input = `
    <div class="three columns">
      <h5>Player ${p+1}</h3>
      Name
      <input class="u-full-width n${p}" type="text">
      Twitter handle
      <input class="u-full-width t${p}" type="text">
      Character
      <select class="u-full-width c${p}">${ch}</select>
      Flag
      <select class="u-full-width f${p}">${ct}</select>
    </div>
    `;
    d.qs(`.inputs${Math.floor(p/4)}`).insertAdjacentHTML("beforeend", input);
  });

  const bcl = '#400000';
  // drawing the stuff
  let c = d.qs('canvas');
  paper.setup(c);
  var raster = new paper.Raster('bg');
  raster.position = paper.view.center;
  raster.fitBounds(paper.view.bounds,true);

  // text
  var tl = new paper.PointText({
    point: [50,80],
    content: 'Top Left Text',
    fillColor: 'white',
    fontFamily: 'DejaVu Sans',
    fontSize: 25
  });
  var tr = new paper.PointText({
    point: [1435,80],
    content: 'Top Right Text',
    fillColor: 'white',
    fontFamily: 'DejaVu Sans',
    justification: 'right',
    fontSize: 25
  });
  var bl = new paper.PointText({
    point: [50,800],
    content: 'Bottom Left Text',
    fillColor: 'white',
    fontFamily: 'DejaVu Sans',
    fontSize: 25
  });
  var br = new paper.PointText({
    point: [1435,800],
    content: 'Bottom Right Text',
    fillColor: 'white',
    fontFamily: 'DejaVu Sans',
    justification: 'right',
    fontSize: 25
  });

  // rankings
  var n1 = new paper.Path.Rectangle(50,140,500,510);
  n1.fillColor = bcl;
  var n1t = new paper.Path.Rectangle(50,655,500,50);
  n1t.fillColor = bcl;
  var n2 = new paper.Path.Rectangle(570,140,270,270);
  n2.fillColor = bcl;
  var n2t = new paper.Path.Rectangle(570,415,270,40);
  n2t.fillColor = bcl;
  var n3 = new paper.Path.Rectangle(560+310,140,270,270);
  n3.fillColor = bcl;
  var n3t = new paper.Path.Rectangle(560+310,415,270,40);
  n3t.fillColor = bcl;
  var n4 = new paper.Path.Rectangle(560+610,140,270,270);
  n4.fillColor = bcl;
  var n4t = new paper.Path.Rectangle(560+610,415,270,40);
  n4t.fillColor = bcl;
  var n5 = new paper.Path.Rectangle(570,140+320,210,210);
  n5.fillColor = bcl;
  var n5t = new paper.Path.Rectangle(570,675,210,30);
  n5t.fillColor = bcl;
  var n6 = new paper.Path.Rectangle(570+220,140+320,210,210);
  n6.fillColor = bcl;
  var n6t = new paper.Path.Rectangle(570+220,675,210,30);
  n6t.fillColor = bcl;
  var n7 = new paper.Path.Rectangle(570+440,140+320,210,210);
  n7.fillColor = bcl;
  var n7t = new paper.Path.Rectangle(570+440,675,210,30);
  n7t.fillColor = bcl;
  var n8 = new paper.Path.Rectangle(570+660,140+320,210,210);
  n8.fillColor = bcl;
  var n8t = new paper.Path.Rectangle(570+660,675,210,30);
  n8t.fillColor = bcl;
  paper.view.draw();
  let t = [n1,n2,n3,n4,n5,n6,n7,n8];
  let twt = [n1t,n2t,n3t,n4t,n5t,n6t,n7t,n8t];
  let nums = [1,2,3,4,5,5,7,7];
  d.qs('.gen').addEventListener('click',e => {
    for(let i=0;i<8;i++) {
      // placing
      var pl = new paper.PointText({
        point: [t[i].position.x-t[i].bounds.width/2+30,t[i].position.y-t[i].bounds.height/2+50],
        content: nums[i].toString(),
        fillColor: 'white',
        fontFamily: 'DejaVu Sans',
        fontSize: 30
      });

      // bg annd character
      let src = document.createElement('img');
      let n = d.qs(`.c${i}`);      
      src.src = `assets/${n.options[n.selectedIndex].text}.png`;
      var bgb = new paper.Path.Rectangle(new paper.Point(t[i].position.x-t[i].bounds.width/2+10,t[i].position.y-t[i].bounds.height/2+10), new paper.Size(t[i].bounds.width-20,t[i].bounds.height-20));
      bgb.fillColor = '#111111';
      var img = new paper.Raster(src);
      img.scale(t[i].bounds.width/img.bounds.width*0.7);
      img.fitBounds(bgb.bounds);
      console.log(d.qs(`.n${i}`).value);
      let fs = t[i].bounds.height/10;

      // name and handle
      var pl = new paper.PointText({
        point: [t[i].position.x-t[i].bounds.width/2+fs,t[i].position.y+t[i].bounds.height/2-fs*0.8],
        content: d.qs(`.n${i}`).value,
        fillColor: 'white',
        fontFamily: 'DejaVu Sans',
        fontSize: fs
      });
      var tw = new paper.PointText({
        point: [twt[i].position.x,twt[i].position.y+fs*0.3],
        content: d.qs(`.t${i}`).value,
        fillColor: 'white',
        fontFamily: 'DejaVu Sans',
        justification: 'center',
        fontSize: fs*0.8
      });

      //flag
      var flg = false;
      for(let j=0; j<ctl.length; j++) {
        if(ctl[j].name == d.qs(`.f${i}`).value) {
          paper.project.importSVG("./flag-icons-main/"+ctl[j].flag_4x3, it => {
            flg = it;
            it.scale(t[i].bounds.width/it.bounds.width*0.2);
            it.position = [t[i].position.x+t[i].bounds.width/2-it.bounds.width,t[i].position.y+t[i].bounds.height/2-it.bounds.height];
          });
          break;
        }
      }
      tl.content = d.qs('.tl').value;
      tr.content = d.qs('.tr').value;
      bl.content = d.qs('.bl').value;
      br.content = d.qs('.br').value;
    }
  })

}

