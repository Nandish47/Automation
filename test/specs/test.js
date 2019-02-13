describe('WebdriverIO version 5 trial run', ()=> {
    it('test webdriverio', ()=> {
        browser.maximizeWindow()
        browser.url('./')
        console.log('successful')
        // browser.debug()
        $('input[type=text]').setValue("test@accion.com")
        $('input[type=password]').setValue("test")
        $('button').click()
        console.log("master strategy is displayed")
        console.log($('.material-icons.start_btn').isDisplayed())
        $('.material-icons.start_btn').click();

    })
})