import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-status-banner',
    templateUrl: './status-banner.component.html',
    styleUrl: './status-banner.component.css'
})
export class StatusBannerComponent implements OnInit {
    announcement: string = ""
    show: boolean = false;

    hide(): void {
        this.show = false;

    }

    search(): void {

        const url = 'https://int-stats.now.ohsome.org/statuspage';

        fetch(url).then(res => res.json()).then(data => {
            if (data["Announce"]) {
                this.announcement = data["Announce"]


                if (this.announcement != "") {

                    this.show = true

                }


            } else {
                console.log("NO announcement in Statuscake available!!!")
            }
        });


    }

    ngOnInit(): void {
        this.search()
    }


}




