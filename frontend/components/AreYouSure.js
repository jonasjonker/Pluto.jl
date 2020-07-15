import { html, useState, useEffect } from "../common/Preact.js"
import { cl } from "../common/ClassTable.js"

export const AreYouSure = ({ recently_deleted, on_click }) => {
    const [hidden, set_hidden] = useState(true)

    useEffect(() => {
        if (recently_deleted != null) {
            set_hidden(false)
            const interval = setInterval(() => {
                set_hidden(true)
            }, 8000)

            return () => {
                clearInterval(interval)
            }
        }
    }, [recently_deleted])

    return html`
        <are-you-sure
            class=${cl({
                hidden: hidden,
            })}
        >
            Cell deleted (<a
                href="#"
                onClick=${(e) => {
                    e.preventDefault()
                    set_hidden(true)

                    on_click()
                }}
                >UNDO</a
            >)
        </are-you-sure>
    `
}
