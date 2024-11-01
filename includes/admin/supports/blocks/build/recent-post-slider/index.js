(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"UU":"wprps/recent-post-slider"}'),s=window.React,r=window.wp.i18n,n=window.wp.components,o=window.wp.blockEditor,l=(window.wp.element,[{value:"desc",label:(0,r.__)("Descending","wp-responsive-recent-post-slider")},{value:"asc",label:(0,r.__)("Ascending","wp-responsive-recent-post-slider")}]),p=[{value:"",label:(0,r.__)("Select Lazyload","wp-responsive-recent-post-slider")},{value:"ondemand",label:(0,r.__)("Ondemand","wp-responsive-recent-post-slider")},{value:"progressive",label:(0,r.__)("Progressive","wp-responsive-recent-post-slider")}],i=[{value:"date",label:(0,r.__)("Post Date","wp-responsive-recent-post-slider")},{value:"modified",label:(0,r.__)("Post Modified Date","wp-responsive-recent-post-slider")},{value:"title",label:(0,r.__)("Post Title","wp-responsive-recent-post-slider")},{value:"name",label:(0,r.__)("Post Slug","wp-responsive-recent-post-slider")},{value:"ID",label:(0,r.__)("Post ID","wp-responsive-recent-post-slider")},{value:"rand",label:(0,r.__)("Random","wp-responsive-recent-post-slider")}],a=[{value:"self",label:(0,r.__)("Same Window","wp-responsive-recent-post-slider")},{value:"blank",label:(0,r.__)("New Window","wp-responsive-recent-post-slider")}],c=[{value:"true",label:(0,r.__)("True","wp-responsive-recent-post-slider")},{value:"false",label:(0,r.__)("False","wp-responsive-recent-post-slider")}];(0,e.registerBlockType)(t.UU,{edit:function({attributes:e,setAttributes:t}){const d=e=>s=>t({[e]:s}),_=(0,s.createElement)(o.InspectorControls,null,(0,s.createElement)(n.PanelBody,{title:(0,r.__)("General Parameters","wp-responsive-recent-post-slider")},(0,s.createElement)(n.SelectControl,{label:(0,r.__)("Design","wp-responsive-recent-post-slider"),value:e.design,options:[{value:"design-1",label:(0,r.__)("Design 1","wp-responsive-recent-post-slider")},{value:"design-2",label:(0,r.__)("Design 2","wp-responsive-recent-post-slider")},{value:"design-3",label:(0,r.__)("Design 3","wp-responsive-recent-post-slider")},{value:"design-4",label:(0,r.__)("Design 4","wp-responsive-recent-post-slider")}],onChange:d("design")}),(0,s.createElement)(n.ToggleControl,{label:(0,r.__)("Show Date","wp-responsive-recent-post-slider"),checked:!!e.show_date,onChange:d("show_date")}),(0,s.createElement)(n.ToggleControl,{label:(0,r.__)("Show Author","wp-responsive-recent-post-slider"),checked:!!e.show_author,onChange:d("show_author")}),(0,s.createElement)(n.ToggleControl,{label:(0,r.__)("Show Category Name","wp-responsive-recent-post-slider"),checked:!!e.show_category_name,onChange:d("show_category_name")}),(0,s.createElement)(n.ToggleControl,{label:(0,r.__)("Show Content","wp-responsive-recent-post-slider"),checked:!!e.show_content,onChange:d("show_content")}),e.show_content&&(0,s.createElement)(n.RangeControl,{label:(0,r.__)("Content Words limit","wp-responsive-recent-post-slider"),value:e.content_words_limit,onChange:d("content_words_limit"),min:1,help:(0,r.__)("Enter content word limit.","wp-responsive-recent-post-slider")}),e.show_content&&(0,s.createElement)(n.SelectControl,{label:(0,r.__)("Read More","wp-responsive-recent-post-slider"),value:e.show_read_more,options:c,onChange:d("show_read_more")}),(0,s.createElement)(n.TextControl,{label:(0,r.__)("Media Size","wp-responsive-recent-post-slider"),value:e.media_size,onChange:d("media_size"),help:(0,r.__)("Choose WordPress registered image size. e.g thumbnail, medium, large, full.","wp-responsive-recent-post-slider")}),e.show_content&&(0,s.createElement)(n.Disabled,null,(0,s.createElement)(n.TextControl,{label:(0,r.__)("Content Tail","wp-responsive-recent-post-slider")})),e.show_content&&(0,s.createElement)(n.__experimentalText,null,(0,s.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,r.__)("Display dots after the post content as continue reading. Upgarade to ","wp-responsive-recent-post-slider"),(0,s.createElement)(n.ExternalLink,{href:Wprpsf_Block.pro_link,target:"_blank"},(0,r.__)("Premium version","wp-responsive-recent-post-slider")),(0,r.__)("to get this option.","wp-responsive-recent-post-slider"))),e.show_content&&(0,s.createElement)(n.Disabled,null,(0,s.createElement)(n.TextControl,{label:(0,r.__)("Read More Text","wp-responsive-recent-post-slider")})),e.show_content&&(0,s.createElement)(n.__experimentalText,null,(0,s.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,r.__)("Enter read more text. Upgarade to ","wp-responsive-recent-post-slider"),(0,s.createElement)(n.ExternalLink,{href:Wprpsf_Block.pro_link,target:"_blank"},(0,r.__)("Premium version","wp-responsive-recent-post-slider")),(0,r.__)("to get this option.","wp-responsive-recent-post-slider"))),(0,s.createElement)(n.Disabled,null,(0,s.createElement)(n.SelectControl,{label:(0,r.__)("Link Behaviour","wp-responsive-recent-post-slider"),options:a})),(0,s.createElement)(n.__experimentalText,null,(0,s.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,r.__)("Choose link bahaviour. Upgarade to ","wp-responsive-recent-post-slider"),(0,s.createElement)(n.ExternalLink,{href:Wprpsf_Block.pro_link,target:"_blank"},(0,r.__)("Premium version","wp-responsive-recent-post-slider")),(0,r.__)("to get this option.","wp-responsive-recent-post-slider")))),(0,s.createElement)(n.PanelBody,{title:(0,r.__)("Slider Parameters","wp-responsive-recent-post-slider"),initialOpen:!1},(0,s.createElement)(n.SelectControl,{label:(0,r.__)("Dots","wp-responsive-recent-post-slider"),value:e.dots,options:c,onChange:d("dots")}),(0,s.createElement)(n.SelectControl,{label:(0,r.__)("Arrows","wp-responsive-recent-post-slider"),value:e.arrows,options:c,onChange:d("arrows"),help:(0,r.__)("Show prev - next arrows.","wp-responsive-recent-post-slider")}),(0,s.createElement)(n.SelectControl,{label:(0,r.__)("Autoplay","wp-responsive-recent-post-slider"),value:e.autoplay,options:c,onChange:d("autoplay")}),"true"==e.autoplay&&(0,s.createElement)(n.RangeControl,{label:(0,r.__)("Autoplay Interval","wp-responsive-recent-post-slider"),value:e.autoplay_interval,onChange:d("autoplay_interval"),min:1,max:5e4,help:(0,r.__)("Enter autoplay interval speed.","wp-responsive-recent-post-slider")}),(0,s.createElement)(n.RangeControl,{label:(0,r.__)("Speed","wp-responsive-recent-post-slider"),value:e.speed,onChange:d("speed"),min:1,max:5e4,help:(0,r.__)("Enter slide speed.","wp-responsive-recent-post-slider")}),(0,s.createElement)(n.Disabled,null,(0,s.createElement)(n.SelectControl,{label:(0,r.__)("Fade","wp-responsive-recent-post-slider"),options:c})),(0,s.createElement)(n.__experimentalText,null,(0,s.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,r.__)("Enable fade effect instead of slide effect. Upgarade to ","wp-responsive-recent-post-slider"),(0,s.createElement)(n.ExternalLink,{href:Wprpsf_Block.pro_link,target:"_blank"},(0,r.__)("Premium version","wp-responsive-recent-post-slider")),(0,r.__)("to get this option.","wp-responsive-recent-post-slider"))),(0,s.createElement)(n.Disabled,null,(0,s.createElement)(n.SelectControl,{label:(0,r.__)("Loop","wp-responsive-recent-post-slider"),options:c})),(0,s.createElement)(n.__experimentalText,null,(0,s.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,r.__)("Enable infinite loop for continuous sliding. Upgarade to ","wp-responsive-recent-post-slider"),(0,s.createElement)(n.ExternalLink,{href:Wprpsf_Block.pro_link,target:"_blank"},(0,r.__)("Premium version","wp-responsive-recent-post-slider")),(0,r.__)("to get this option.","wp-responsive-recent-post-slider"))),(0,s.createElement)(n.Disabled,null,(0,s.createElement)(n.SelectControl,{label:(0,r.__)("Pause On Hover","wp-responsive-recent-post-slider"),options:c})),(0,s.createElement)(n.__experimentalText,null,(0,s.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,r.__)("Pause slider autoplay on hover. Upgarade to ","wp-responsive-recent-post-slider"),(0,s.createElement)(n.ExternalLink,{href:Wprpsf_Block.pro_link,target:"_blank"},(0,r.__)("Premium version","wp-responsive-recent-post-slider")),(0,r.__)("to get this option.","wp-responsive-recent-post-slider"))),(0,s.createElement)(n.Disabled,null,(0,s.createElement)(n.RangeControl,{label:(0,r.__)("Nav Slides","wp-responsive-recent-post-slider")})),(0,s.createElement)(n.__experimentalText,null,(0,s.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,r.__)("Enter number of slider navigation column. Upgarade to ","wp-responsive-recent-post-slider"),(0,s.createElement)(n.ExternalLink,{href:Wprpsf_Block.pro_link,target:"_blank"},(0,r.__)("Premium version","wp-responsive-recent-post-slider")),(0,r.__)("to get this option.","wp-responsive-recent-post-slider"))),(0,s.createElement)(n.SelectControl,{label:(0,r.__)("Slider Lazyload","wp-responsive-recent-post-slider"),value:e.lazyload,options:p,onChange:d("lazyload"),help:(0,r.__)("Select option to use lazy loading in slider.","wp-responsive-recent-post-slider")})),(0,s.createElement)(n.PanelBody,{title:(0,r.__)("Query Parameters","wp-responsive-recent-post-slider"),initialOpen:!1},(0,s.createElement)(n.TextControl,{label:(0,r.__)("Post Type","wp-responsive-recent-post-slider"),value:e.post_type,onChange:d("post_type"),help:(0,s.createElement)("span",{title:(0,r.__)("Note: Be sure you have added valid post type name otherwise no result will be displayed.","wp-responsive-recent-post-slider")},(0,r.__)("Enter registered post type name. You can find it on plugin setting page.","wp-responsive-recent-post-slider")," [?]")}),(0,s.createElement)(n.TextControl,{label:(0,r.__)("Taxonomy","wp-responsive-recent-post-slider"),value:e.taxonomy,onChange:d("taxonomy"),help:(0,s.createElement)("span",{title:(0,r.__)("Note: Be sure you have added valid taxonomy name otherwise no result will be displayed.","wp-responsive-recent-post-slider")},(0,r.__)("Enter registered taxonomy name. You can find it on plugin setting page.","wp-responsive-recent-post-slider")," [?]")}),(0,s.createElement)(n.RangeControl,{label:(0,r.__)("Limit","wp-responsive-recent-post-slider"),value:e.limit,onChange:d("limit"),min:-1,help:(0,r.__)("Enter number of post to be displayed. Enter -1 to display all.","wp-responsive-recent-post-slider")}),(0,s.createElement)(n.Disabled,null,(0,s.createElement)(n.SelectControl,{label:(0,r.__)("Order By","wp-responsive-recent-post-slider"),options:i})),(0,s.createElement)(n.__experimentalText,null,(0,s.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,r.__)("Choose option to set order of post by date, title, name etc. Upgarade to ","wp-responsive-recent-post-slider"),(0,s.createElement)(n.ExternalLink,{href:Wprpsf_Block.pro_link,target:"_blank"},(0,r.__)("Premium version","wp-responsive-recent-post-slider")),(0,r.__)("to get this option.","wp-responsive-recent-post-slider"))),(0,s.createElement)(n.Disabled,null,(0,s.createElement)(n.SelectControl,{label:(0,r.__)("Order","wp-responsive-recent-post-slider"),options:l})),(0,s.createElement)(n.__experimentalText,null,(0,s.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,r.__)("Choose option to set post in acesding and descending order. Upgarade to ","wp-responsive-recent-post-slider"),(0,s.createElement)(n.ExternalLink,{href:Wprpsf_Block.pro_link,target:"_blank"},(0,r.__)("Premium version","wp-responsive-recent-post-slider")),(0,r.__)("to get this option.","wp-responsive-recent-post-slider"))),(0,s.createElement)(n.TextControl,{label:(0,r.__)("Display Specific Category","wp-responsive-recent-post-slider"),value:e.category,onChange:d("category"),help:(0,s.createElement)("span",{title:(0,r.__)("You can pass multiple ids with comma seperated. You can find id at relevant category listing page.","wp-responsive-recent-post-slider")},(0,r.__)("Enter category id to display categories wise.","wp-responsive-recent-post-slider")," [?]")}),(0,s.createElement)(n.Disabled,null,(0,s.createElement)(n.SelectControl,{label:(0,r.__)("Display Child Category","wp-responsive-recent-post-slider"),options:c})),(0,s.createElement)(n.__experimentalText,null,(0,s.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,r.__)("If you are using parent category then whether to display child category or not. Upgarade to ","wp-responsive-recent-post-slider"),(0,s.createElement)(n.ExternalLink,{href:Wprpsf_Block.pro_link,target:"_blank"},(0,r.__)("Premium version","wp-responsive-recent-post-slider")),(0,r.__)("to get this option.","wp-responsive-recent-post-slider"))),(0,s.createElement)(n.Disabled,null,(0,s.createElement)(n.TextControl,{label:(0,r.__)("Exclude Category","wp-responsive-recent-post-slider")})),(0,s.createElement)(n.__experimentalText,null,(0,s.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,r.__)("Exclude post category. Works only if `Category` field is empty. You can pass multiple ids with comma seperated. You can find id at relevant category listing page. Upgarade to ","wp-responsive-recent-post-slider"),(0,s.createElement)(n.ExternalLink,{href:Wprpsf_Block.pro_link,target:"_blank"},(0,r.__)("Premium version","wp-responsive-recent-post-slider")),(0,r.__)("to get this option.","wp-responsive-recent-post-slider"))),(0,s.createElement)(n.TextControl,{label:(0,r.__)("Display Specific Posts","wp-responsive-recent-post-slider"),value:e.posts,onChange:d("posts"),help:(0,s.createElement)("span",{title:(0,r.__)("You can pass multiple ids with comma seperated. You can find id at relevant post listing page.","wp-responsive-recent-post-slider")},(0,r.__)("Enter id of the post which you want to display.","wp-responsive-recent-post-slider")," [?]")}),(0,s.createElement)(n.TextControl,{label:(0,r.__)("Exclude Post","wp-responsive-recent-post-slider"),value:e.hide_post,onChange:d("hide_post"),help:(0,s.createElement)("span",{title:(0,r.__)("You can pass multiple ids with comma seperated. You can find id at relevant post listing page.","wp-responsive-recent-post-slider")},(0,r.__)("Enter id of the post which you do not want to display.","wp-responsive-recent-post-slider")," [?]")}),(0,s.createElement)(n.Disabled,null,(0,s.createElement)(n.TextControl,{label:(0,r.__)("Include Author","wp-responsive-recent-post-slider")})),(0,s.createElement)(n.__experimentalText,null,(0,s.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,r.__)("Enter author id to display posts of particular author. You can pass multiple ids with comma seperated. You can find id at users listing page. Upgarade to ","wp-responsive-recent-post-slider"),(0,s.createElement)(n.ExternalLink,{href:Wprpsf_Block.pro_link,target:"_blank"},(0,r.__)("Premium version","wp-responsive-recent-post-slider")),(0,r.__)("to get this option.","wp-responsive-recent-post-slider"))),(0,s.createElement)(n.Disabled,null,(0,s.createElement)(n.TextControl,{label:(0,r.__)("Exclude Author","wp-responsive-recent-post-slider")})),(0,s.createElement)(n.__experimentalText,null,(0,s.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,r.__)("Enter author id to hide post of particular author. Works only if `Include Author` field is empty. You can pass multiple ids with comma seperated. You can find id at relevant users listing page. Upgarade to ","wp-responsive-recent-post-slider"),(0,s.createElement)(n.ExternalLink,{href:Wprpsf_Block.pro_link,target:"_blank"},(0,r.__)("Premium version","wp-responsive-recent-post-slider")),(0,r.__)("to get this option.","wp-responsive-recent-post-slider"))),(0,s.createElement)(n.Disabled,null,(0,s.createElement)(n.SelectControl,{label:(0,r.__)("Display Sticky Posts","wp-responsive-recent-post-slider"),options:c})),(0,s.createElement)(n.__experimentalText,null,(0,s.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,r.__)("Display sticky posts or not. Note: sticky posts only be displayed at front side. Upgarade to ","wp-responsive-recent-post-slider"),(0,s.createElement)(n.ExternalLink,{href:Wprpsf_Block.pro_link,target:"_blank"},(0,r.__)("Premium version","wp-responsive-recent-post-slider")),(0,r.__)("to get this option.","wp-responsive-recent-post-slider"))),(0,s.createElement)(n.Disabled,null,(0,s.createElement)(n.RangeControl,{label:(0,r.__)("Query Offset","wp-responsive-recent-post-slider")})),(0,s.createElement)(n.__experimentalText,null,(0,s.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,r.__)("Exclude number of posts from starting. e.g if you pass 5 then it will skip first five post. Note: This will not work with limit=-1. Upgarade to ","wp-responsive-recent-post-slider"),(0,s.createElement)(n.ExternalLink,{href:Wprpsf_Block.pro_link,target:"_blank"},(0,r.__)("Premium version","wp-responsive-recent-post-slider")),(0,r.__)("to get this option.","wp-responsive-recent-post-slider")))));var m=(e=>{var t=wp.blocks.getBlockAttributes("wprps/recent-post-slider"),s=["content_tail"],r="";for(var n in e)e[n]="string"==typeof e[n]?e[n].trim():e[n],e.hasOwnProperty(n)&&void 0!==e[n]&&e[n]!==t[n]&&(""!==e[n]||jQuery.inArray(n,s)>=0)&&(r+=n+'="'+e[n]+'" ');return r})(e),w=(m=m.trim())?"[recent_post_slider "+m+"]":"[recent_post_slider]";return(0,s.createElement)("div",{...(0,o.useBlockProps)()},_,(0,s.createElement)("div",{className:"wpos-pro-guten-shrt"},(0,s.createElement)("div",{className:"wpos-pro-guten-shrt-title"},(0,s.createElement)("span",null,(0,r.__)("WP Responsive Recent Post Slider/Carousel - Slider"))),w,(0,s.createElement)("div",{className:"wpos-guten-shrt-footer"},(0,s.createElement)("span",null),(0,r.__)("Do you want to check demo of this plugin.","wp-responsive-recent-post-slider")," ",(0,s.createElement)("a",{href:Wprpsf_Block.free_demo_link,target:"_blank"},(0,r.__)("Click here","wp-responsive-recent-post-slider"))),(0,s.createElement)("div",{className:"wpos-guten-shrt-footer"},(0,r.__)("Do you also want to check premium version demo of this plugin.","wp-responsive-recent-post-slider")," ",(0,s.createElement)("a",{href:Wprpsf_Block.pro_demo_link,target:"_blank"},(0,r.__)("Click here","wp-responsive-recent-post-slider")))))}})})();