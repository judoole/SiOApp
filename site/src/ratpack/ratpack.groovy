import com.github.judoole.sio.Cantina
import groovy.xml.StreamingMarkupBuilder
import org.ratpackframework.groovy.templating.TemplateRenderer

import static org.ratpackframework.groovy.RatpackScript.ratpack

ratpack {
    handlers {
        get {
            response.send "Nothing to see. Yet."
        }

        get("cantina/:id"){
            Cantina cantina = Cantina.fromId(pathTokens.id)

            def xml = new XmlSlurper().parse("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fwww.sio.no%2Fwps%2Fportal%2F%3FWCM_GLOBAL_CONTEXT%3D%2Fwps%2Fwcm%2Fconnect%2Fmigration%2Fsio%2Fmat%2Bog%2Bdrikke%2Fdagens%2Bmiddag%2F"+ cantina.urlId + "'and%20xpath%3D'%2F%2Fdiv%5B%40class%3D%22sioArticleBodyText%22%5D'")
            def body = new StreamingMarkupBuilder().bindNode(xml.results).toString()

            get(TemplateRenderer).render "cantina.html", title: cantina.name, body: body
        }
    }
}