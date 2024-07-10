# jquery-bp-show-hide
bytepattern@gmail.com

Please follow the below instructions:

Please add css for design:

.bp-showhide{display:none;}
.bp-read-more,.bp-read-less{cursor:pointer;color:#6280aa;white-space:nowrap;}

Place the code any where into footer 

 $(document).ready(function() {
  $(".bp-showhide").showHideText({
    maxLength: 30,
    moreText: 'More...',
    lessText: 'Hide'
  });
});

Add span with the class bp-showhide:
<span class="bp-showhide"> hide text here </span>
 

