package com.github.judoole.sio

import org.junit.Test

import static org.hamcrest.MatcherAssert.assertThat
import static org.hamcrest.core.IsEqual.equalTo
import static org.hamcrest.core.IsNull.notNullValue

class CantinaTest {
    @Test
    void should_get_Cantina_from_id(){
        def cantina = Cantina.fromId("0")
        assertThat(cantina, equalTo(Cantina.cantinas[0]))
    }
}
