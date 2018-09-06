import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'

class Landing extends Component {
    render() {
        return(
            <div style = {{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                     <Cell col={12}>
                        <img 
                            src="https://media.licdn.com/dms/image/C4E03AQGEPCMDmsnCXg/profile-displayphoto-shrink_200_200/0?e=1539820800&v=beta&t=IEltxQkcgXiaWnmoedYzxeRN35Eq2huteOAzqX2m5yk"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="bannerText">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>

                            <p> HTML/CSS  |  Bootstrap  |  JavaScript  |  React  |  Angular  |  NodeJS  |  Express  |  MongoDB  |  Firebase </p>

                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/andrewflory/" rel ="noopener noreferrer" target="_blank">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAAC
                                xjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAV/SURBVGhD7Vn7UxNXFOYP6OMv6uP3/trOlApFCkqBRCDykkSNBsIjIYICgkASCI+EIM9
                                geCqCiCDgA+QNbbEqY6fQ6XQ6pdPO6f1udpeEhAplncVOzsw3s9/ec885397de/fuRoQtbGE7mhWcrvrQlGT/uFhl+0IJIHep2vGBUM7hDQL
                                yc9xes8r2NwtISgI1sFp6CjNq3hfKO5hxEVmubQTRF/WTxvmMUm8uKQKNc470hX1cEGpCbUKZbzaMBDpmOB7TqbHtYwHUgpryzrk9Qpn/bl
                                CMocRIhAqoJPSF/WRW2/860DNjSrZ9CuUYUnROGnhJOZX36dS9Lc5VvRuUXT0hBVd3r1OmfVriKW3LlN7wROIa5zylueYljraU9hWJoy9iiB
                                yxkYNzlhO5UQO4pnnO99yoaz8Ryt3fTCrbZ3BObFmiuNEtyrDP8M7JPT9QPAucxRKBJ9x5zbmuZJhMmgZ+DOiNXirIcknccKmLQ+Rog4/I0R
                                cxcIyYiJ1TMcY5coKjBtSS6FriHDUK5e5vopB4xzx92bNJ6sqHvHNsyxrnqdfG2fDa6ETnj5xnmW5TUZqDHwM6wy0yZrokrr/QySFytMFH5O
                                iLGDhGTMTWlIxyjpzIjRrAUdN/FhLV8ZzUVVP8GIhu+56Sax5JPMa9Tt9an0j8G+cyna6bk3h84wKHyNEGH5GjL2KIPKlmhucQuYrlRg04PpK
                                Q4wRZhUR6NulMxSQZdG1UkOGkHGMffd26ewXfJmQVkm65S5aUOhpsHqTJWyNUY2ilorNNFNW+EdJfTsgm5EQHHkY7zd59QH9ur3P8/tMqlWud
                                lH5lJMhfbsgm5FTDAg/064slSQjQbe2l85d7gvzlhmxCott88/rK5JQkYufnNbrBbq9M850gf7khmxDgXH4/lWY00qOBMVp9OE3ucg+ZU+oDp
                                tC3BVmFnOh6QZlsATOnNbBXBTvlstkrvnExpK/ckFVIVNsGv/onW9Yp1rXKj4FIz0vB5xXFtH4nnRfxVbevHRNGcvUMZZaMkLZ0hFLKH1ACWy
                                R3++8P2YTENS+zQHYebC+0eb3c56J5IGR7nraVzl69R5bU+pDtFna7qqqng3L6QzYhCfZZHuhWrZfGO4clXM9upEvC+5TZ2E1l6Y6A9ro8t1S
                                wq7idliem6Jfni/Tb5gq9XnnGn7fai07enl5+PyivCNmFLLFC/Kdfq6ElQEiVtimgvftGD+834Oinna21gDYRWI8aC29S8Rk7v2X35gYUF7I
                                4Nkleq5f+YFO1//m92FyeJQubQPSWoaDcgOJCAKw34113yc58K7IayJHfSvOjE0F+OF+i3d0G+ONYCBlq9E0CJl0raY29ZM5sZtO3jdamZgL8
                                +up8Hxoiu4JnMcWF4MG+wu59YwE2VK+4XzR7ybRoHNRV1RPgO+K+zXPEuH0bOX8oLmSBPSPoh/XCP95lg4eqzzcH+E54RrhvrHMlwBdQXMh03z
                                3e76SwXRaRY+yna2yqDuV7rIXE3AzcgGGvjlkqlO87JwTnQ/mGhYimtJCZ/v+JkDm2jca5sBDRwkLeLSG+r+Glmnq+kImwsNcP/YUO7lNg9PC1
                                oTzDIaE0zbeZit4rpGiIn/f3vSr4Hl2I8FshsfZxUCB8ZMbXkuzCwSBgtOBzmiW7XDxAeZZd5DKeXjLKv1L6x4trWiKdaSjAF9CWDDNf3zuZP5J
                                YTajtQL8VhB89O7pcb1AgpYGaUNuB/yWak22VUO7/FV5p4Ks8Hw2VtUwo883GR0Vtf4qOuAq4zRLq5xQBbiedwctFsNF4UpZU9p5Q5sEMw2dWWa
                                9jKH1XQjmgBnaXlB9ahL/hx6NFZf3IpK79nAUN+VP/bQE5kfvQ/9fDFraw7bGIiH8AFtpys4f7eR4AAAAASUVORK5CYII=" />
                                </a>

                                {/* GitHub */}
                                <a href="https://github.com/DrewFlory" rel ="noopener noreferrer" target="_blank">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACx
                                jwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAsKSURBVGhD7VpZbFTXGaar2qpS+9D2oYuqqi9t1VaVmqpSpfShD33tIkVtpUrpQwXFM17B
                                C5tnvIw9M/feMV4wHttzZzA2wQaDgRDCEoIJMTs1BmNsYouEYgIlTkvTlGDs0+87c87cO/Y4toNJ8sAv/RrP3HvP+b7z/+dfzvWyJzKHGFmt3
                                za89q8sb+zPpiex3MyKrbQ88T9GshO/tjz2j3w+36fVrR8PeTAx+jQ/jb+1fU0C9sT3mt74W5Y3Lt5PTY99H3oCpKrNnMRP5WAflYjbl784ev
                                783Yg3vgvgHkqQufZDs7hVmKXQihZhVEWFEVJa3SyMQLMwy1qEuQ7XC2JTpteeThKLD4JYrpXf+Xk1/Icj4ZWJHzeWbD0nwefEp621MWEStNUk
                                jMgi1IgK0w9iICUJee2bsOhf4HqfVFM9Hokuj34Gq1eBSSdrcuPTvV0viRf3vZAZYCVWvxxWKQXQDbCAD3+XwyrhGfdqhbWsVbYmdNbwtn1HTb
                                u0EvK0fh2TvCqtUNgqTh49Kh68PSYGL/QlgQSjwoLLWPl2xn2h1ShuFkFjE8g2wf1AzIIlNRlYlK5n5dh01Xuwzm/V9EsjGPB7GPgGfdrgymLS
                                saHzksjw2bPCLIoJKxtAoeG8ZlFV1CDK19UI/wZL+HyG8PnDwl9qirINEfm9tCwkAmvqkuRyQY6W02SgZhgW1XvIYxcrGI8mNSu3fN/wyEg0Rf
                                PrySb+cUUSqSto4woC/KYUyIWozx8SFWs3ilBBVFSvaRQhozGNjLROUUwGA2ihgvPBxFqR+AYGuYmVnpIRSE0SqW0W702MSiJvDl8W+3t2ZwS7W
                                K0M1orwTDKIgiTDXKRgLU58vq7PYgDsCbiTyxLUTVZcDBztE28M9EtC42P9GYEtRn2+MNxxo6ha1yDC5ua0+czCVrrYZMTT+pSCt3BR0SkZbVyDB
                                gLwbe6HpMlF05pt4viOoyK6uTUjwPm0bH0N3AsRyzVmsKhRhC2Xq5kgkxd7iHuuB5dHv6Qgzi8sIzDgpFkYSyNRFaoVlWqTXu07Iy6+1Cc6rd3ye/
                                3qNhEoqZebnJs9uKpJhPJhyXyE3rxWEc5vkfuhqrBRjsH7Qqub5LONxe2Cofx6/99Fe7CbiVWUVZpwLccyZhXIepGzvHadgjm/gPmLVjZcCtFDD8
                                SQWVoWlkDq8tvEg4kxuUeodLG2wA4JSmtjSbvYUrlDEu2q6QHAnaKldLuI5CRS99TmbREn9xwT7/7ztdRYvZ1H5DVGuoqqSGp+SYbhHS4Wzk58V0G
                                dWyJe+2kOxIecQTYLf3kyIlWv3iya1nakJtZ6/61RMfTqGTFy6qx4+8bVWde1EvSNSxfFwMsnxcT1oVnXTz9/XBLxl6r5QvUODiRaLPBDpIMOBXdu
                                wSBdjN8mEpYegNFE+zSJSIvMALBU+kr30SQRnynn81UYaZHMXA9X9SC/IKIqyLOlNjv2VQwyaa1xrBGGn/rKwykigeJ6OdGt4UsZgTyqdtfukXlJ
                                zyfnDNWl8LAAxfzML3PnFjD9K0GarnAbCNalDRrEBo0gwowPPR4inZEeOX4ZqgI9J93abRXWZGZ2fEDBni3wvR6Z/FxVbFlF0sRUZmISPdH9ckYQS
                                6F3RwdltcAox+yv5w4aDSlMTAlywVfa31LQ0wUX71iom/QDYbMxNRDVLGgRzeu3ift3k1n9cWkfIhmBMkTruSurN6ZwGUEZihHBEr9T0B0JZjd/U7J
                                Eya0fqAo7bsUowut9e3szTr6Uem98BGE6jsDiLKTMK5oIFFhQ8tuVCr4jRlbil5IIewZ1M1dBD6Td6uaVgYyTL7V2IDEyker5GXDcRMz82CS3goLviO
                                mN/UkScRWH5YFIaiAdrf51YzjjxEutPZv3zYpeIVfZwqoDZdQxBd8RedJBItUOkbKAEzkqS5Klyb2bHw6RPdHnZxMx0ZBpIrIqti8q+I5oIuz09M3ll
                                S4ia2olkTvXBjNOvNTaVbM7zbWoQRcRqwQW8cavKfiORDz2s5LIHK7FCMLrr1/szzjxUmu8okt2m24ijKIpIuxKvfEzCr4jkSz7NwTKQwN9c2WVE/7Y/
                                fE6a6GZk75z+9qs3xaqDOW6SdP6n1sqaqFATc0PZc2nsamTl30KviNGTusPJRFX/zEzq6MnkJWse9I3LvWLjahiR89fSPt9odpWtVO8YB9I+43FJ7EwUu
                                q5/ai5NC6qlYM2w2O3KviO+J6Nfw4PT5quOitZujtE2GewfLh11SlPnjN2iU2F7akgcHvksjg5I9e4Eygr34voLvX3w1sPyaaKv+vftmFMbnSW8nru
                                tJKeVTCIYrN7Ffx0wcUzRl5sOvUA1F0w+ulemLQTG/E9lO2c9BgaoqETZ1IguLrsM3S/cmpfr4iu25a6fgz9BnsSJj1+vzc+LAvFm4NJIoPHT0mQgaI
                                Zixh2ynkeI/Gemqz4TxT0dEEUCPIGecSpHqpw7ROqDsMH4gdm+TY15t8udgKY/n6o7aC8X38fOX1Ofh89lzxOcit/o5ua6Crd1mBDxyo8RaREHkjc63q
                                m61MKeroYK+2fcRKz1NknIbiXu3ijVhVukmA6Qt1pbkYdRmPlLvHPHzwh7LJO5x5Y6nLvqbSu8J03r4njsGwkG90j9iHPwNzzcTE1HqqVE2NzlVCwZ4tY
                                Jj6BbDli5qHN5UOwTKTAlvsiXNAsTzn04LJ3hx/T1babu8TZA6+gtB8Q/1tAQUlL3h27It2Ilq1Fo8aFYU9P93WTYLQKucIuj2F5LztZBTuzgEi2tAqPM9GX8G9qL
                                Q/i8BkobnAm8YWlL1t5zjEpw+ZzRndGAlRaiO6j7+dC8KDCXem6lSlAk5DnXAWwhicxwkVXkDNLdHn0C4gGt1GUJa3C2h+T2eWdYrs6MXFbhkrXozuECmRVKnY37s1
                                IgjrMPYLxjJyYKF8fmbEX0jXZ5rr2htrkfIGk4L6/gMgKPqBzih5gb3S/9HfEcAB3yheqjGj4PQ7C8yXII+0IuXJBMltBKqIl96cmYZgIubk83LbPzWsNLYwGpt
                                c+hZWb0hGM+aUGm5F+Xb8KbpZry/oreUjN6rhBghu7MH9iZMjlAQb3RCYS3BfVYacjlIr55aFItv0LBXNhwsNrZM53rfzYFE/6+F6Dm/7w1oNiHD2J7YdlpJkd5d
                                lWJuCZdF/zfulis10rPIuEWaY7QrtcwVucYAX+wAHM1cn9wjdTTGaj5y7IbM0zLCY45or+I33oVeY+z5qp3PQce+YhQ5o7kUQALuWJT2FRD8+ZNxYiiNclkgx7eVq
                                lABkVZBj377w2KDM8D+cmXh8S/72z8OJRbnoSwYYniYrqmrSNLZVvvdjSeuwhc3n0KwrSBxeaVJJZBcvwzVRxeril8u9dDXNHq5mqiQR8dWl5Qqt0J1jC8MT7l4SE
                                FhZomPghkuCULPWrsVqIagwCJl0uj/ljV0bQmVQTcfc/UnnynixBuIeO1+TGv6wgLJ0wmyJhjnMSs5iu5oCIFC0BEb4/lCEWC+aJlz7Wfyzg+wlYpwGbj0f809Ii
                                6PNrViUW5VoM03JB+P7QDzfKS77RxZiXFh1iH0WM7NgPsGrbQUgBQHmPzM8Gix1eJvBUBgcWmvrUHZFRf17F5zOP/R37XCIP9jxxP/z5KhOWJIX80FjSPr0FeWXH
                                xh7RXb9XdIS7RUvpNlGTt0W/4KT+G9rC/1v5yAhkEp7mA9TvAc5A2OyAm/QiVI/W5iWuIZmexu+HsMea8PsKIyv2c76nVI8+kSfy8ZVly/4PQ0eSQqyW6C4AAAAAS
                                UVORK5CYII=" />

                                </a>


                                {/* Instagram */}
                                <a href="https://www.instagram.com/drewcodez/" rel ="noopener noreferrer" target="_blank">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAAC
                                xjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARvSURBVGhD7VnfbxRVGG2Mf4aJ/4A++GTirw3srmxnlu3uznRhty3b1rYLNKUmisX40P
                                gEItDYVqwtLUQaY3zSWAtIRcWCgrZYjQ8+AFKgbqr0RxCSrm2v37n7Td2ws1ucnXU0zklOOrlz55zz7Xf3zs60woULFy5cuHDxf4bH43lwYz
                                Aa9in6oFfRvvSp2k90fLkkkgZrHfGpeggebFce+JXoM2T2I5mJ8pI8gtVPsa298CtaLRlkDLOW1hdE9+EBMXB02BZCC5o5xWS8lXqC7e3BR
                                lV7mlq/BINE/XZxaeoHUS58Ozkl4smULAae/srokxyjNHR2dj5A63gKwjC4NTfPluXD7K+/5RSjf4cMHMc6fGp0U7bVuvhm4hJblR9fX5zgJ
                                aYLf1B7luNYB7W3B2INqV1sYS9WV1fF9PWbIpPJ8Mhf2NbUaiyxHo5jHdTakxDb39XL8vZi74FuGXbHrpfE8vIyj2ax/1Avd0U7wXGsg4QmIT
                                YwdJzl7YVe8xyH1fO+f/1D7xjnJjmOdXhV7XuIHTk2zPJ/D/iUl5byl42BkROnRW3jThn6XsAT3sjAcayjlELu3L27tvvg7xtv9ouZX9J8dn04V
                                gi+uMeOvyeJ44WFRaFGEsbykAxUbZVduB+Up5B9XUJM0I2wCC9/fHot8NVr0zJMOj0rzn11UX7HwrHk2vnRflpKJhq5hCfm2ltIvEWIHa8U5Q
                                qx69XXxKHuPrGysiILycXc/ILY+XyHDKcEq8VsS4epjkF4OlKIOLz+zoadKVRdJwO+tY6mI4XcTu0R6bGzHLc4evsGZcCGcMJUy+A/XsgqsaY
                                qLjaFtoirP1/juIUxduYLGTCgVstrzTRBRzpSSWse8z759HOOWxinxj6Tc3GNmZZBRwppCtdI066ePo5bGNgMMBfXmGkZdKSQQTbFfePGzRmOn
                                A+cUyJxOfdoImWqZdCRQuZpKw0FY9K4IdUurt/ILwa/cpPNbXJOaHNMLLTsMdUy6Egh4Hh9u/DTXMzHHXzfwW7x4chJSRxjDOcwZ7yeHgtMNHL
                                pWCHguWS7CG/eIgOYEefOU8Fm195LRwsBF+meMpzYLlojdRQ8JoljjN1OvWx6jRkdL8Qu2lqIT9EnIPa2A4XAE97IwHGsg4RGIbY31mhqVk7Ck
                                zsywnGsw6doByGWCG0t+nPCbsIrTp7ZQvTXOY51+IK6B2LgmW1tpqbl4Fgye78B8aqW45QG6sp5CEZo65xu2m1qbCenm3evbeHUjXGOUTq8lfq
                                jXkW/A2Fspafq2sqyzPBgBm14ZIvQfverkUc4hjVsUKIPUydeJHaAXkUbMt7/gir9HElWJUQqUlOQzcRGeua4H9bSXR9PjYY+8Q/68M5SR95nvr
                                tB0Z7geBJ0PkDzRr0B7TEeygdN+CBH9N/CjziehPHykD7gAzyUD7zS9xX4Jw61/Ap9QjMkMEfHi+uRzOZp/q1iJN006V2hvxcQmMaMThTsiF/RHs
                                dK8QQiD/GQCxcuXPwnUFHxJyteiIcnHOVhAAAAAElFTkSuQmCC" />
                                
                                </a>
                            </div>
                        </div>
                     </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;