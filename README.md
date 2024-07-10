# jquery-bp-show-hide
bytepattern@gmail.com

Please follow the below instructions:

Please add css for design:

.bp-showhide{display:none;}
.bp-read-more,.bp-read-less{cursor:pointer;color:#6280aa;white-space:nowrap;}

Place the code any where into footer 
<code>
 $(document).ready(function() {
  $(".bp-showhide").showHideText({
    maxLength: 30,
    moreText: 'More...',
    lessText: 'Hide'
  });
});
</code>
Add span with the class bp-showhide:
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
<foreignObject width="100" height="100">
  <span class="bp-showhide"> hide text here </span>
</foreignObject>
</svg>

 

