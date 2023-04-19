var MyApp={
    LoginPage:{
        GetXmppID:function(text){
            if(typeof constants.TheXmppIDCompleter!=undefined || typeof constants.TheXmppIDCompleter!='undefined' || typeof constants.TheXmppIDCompleter!='')
            {
                if(text.indexOf(constants.TheXmppIDCompleter)==-1){
                    text=text+constants.TheXmppIDCompleter;
                }
            }
        return text;
        
        },
        LoginUser:function(_This){
            if(typeof constants.loginPageData =="object" )
            {
                if (
                    (typeof constants.loginPageData.UserName!=undefined || typeof constants.loginPageData.UserName!='undefined')
                    &&
                    (typeof constants.loginPageData.Password!=undefined || typeof constants.loginPageData.Password!='undefined')
                )
                {
                    console.log(_This);
                    _This.el.classList.add('hide');//برای زیبایی بیشتر صفحه را نمایش نمیدهد
                    _This.$jid_input.val(constants.loginPageData.UserName);
                    _This.$password_input.val(constants.loginPageData.Password);
                    _This.submit();
                }
            }
        }
    },
    Dashboard:{
        //MyApp.Dashboard.ConvertXmppIDToUserName(this.account.get('name'));
        //{{username}}
        //{[print(xabber.getString("account_sync"))]}
        ConvertXmppIDToUserName(text){
            console.log('ConvertXmppIDToUserName');
            if(text.indexOf(constants.TheXmppIDCompleter)!=-1){
                text=text.replaceAll(constants.TheXmppIDCompleter,'');
            }
            return text;
        }
    }

}