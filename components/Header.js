import react, {useState} from 'react'
import Typist from 'react-typist';

export default function Header({ title }) {
  const [isShowingComingSoon, setIsShowingComingSoon] = useState(false)

  return(
    <>
        <h1 className="title">
          <Typist className="TypistExample-message" cursor={{ hideWhenDone: true }} onTypingDone={e => setIsShowingComingSoon(true)}  >
              
              {/* {title} */}
              Web RoFo
              {/* <Typist.Backspace count={8} delay={1000} />
              Right Of First Order
              <Typist.Backspace count={4} delay={1000} />
              ffer */}
              <Typist.Backspace count={8} delay={1000} />
              Reliable 
              <Typist.Delay ms={1250} />
              {` `}Open
              <Typist.Backspace count={4} delay={1000} />
              <Typist.Delay ms={1250} />
              Outspoken
              <Typist.Backspace count={9} delay={1000} />
              <Typist.Delay ms={1250} />
              Original
              <Typist.Delay ms={1250} />
              {` `}Flawless 
              <Typist.Delay ms={1250} />
              {` `}Outstanding
              <Typist.Backspace count={38} delay={3000} />
              Web RoFo

              {/* <Typist.Delay ms={1250} /> */}
              {/* * Easy to use backp<Typist.Delay ms={500} />sace */}
              {/* <Typist.Backspace count={5} delay={1000} /> */}
              {/* <Typist.Delay ms={750} /> */}
              {/* space */}

          </Typist>
        </h1>
        {isShowingComingSoon && <p className="description">
            <Typist className="TypistExample-message" cursor={{ hideWhenDone: true }}   >
              Coming soon...
            </Typist>
          </p>
        }
    </>
  )
}