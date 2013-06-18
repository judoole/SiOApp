import static groovy.json.JsonOutput.toJson
import static org.ratpackframework.groovy.RatpackScript.ratpack

ratpack {
    handlers {
        get {
            response.send "Hello to the world"
        }
    }
}