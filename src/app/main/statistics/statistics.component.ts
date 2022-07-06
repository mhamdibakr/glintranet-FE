import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { colors } from 'app/colors.const';
import { StatisticsService } from '../services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  constructor(private statService: StatisticsService) { }

  public data: any[]
  public totFaqs: number
  public totDocs: number
  public totComments: number
  public totProjects1: number

  public sections = []
  public count = []


  public contentHeader: object;
  public radioModel = 1;
  private successColorShade = '#28dac6';
  private tooltipShadow = 'rgba(0, 0, 0, 0.25)';
  private labelColor = '#6e6b7b';
  private grid_line_color = 'rgba(200, 200, 200, 0.2)'; // RGBA color helps in dark layout

  getData() {
    var count1: any = []
    var sections1: any = []

    this.statService.getAllReports().subscribe(
      (res: any) => {
        this.data = res.reports,
          this.totFaqs = res.totFAQs,
          this.totComments = res.totComment,
          this.totDocs = res.totDocs,
          this.totProjects1 = res.totProjects
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    )
  }

  showData() {
    var allData: any = []
    var count: any = []
    var sections: any = []
    this.statService.getAllReports().subscribe({
      next: (res) => {
        allData = res.reports,
        allData.forEach(function (value: any[]) {
          count.push(value[1])
          sections.push(value[0])
        })
        console.log(count);
        this.barChart.datasets[0].data = count
        this.barChart.labels = sections
      },
      error: (err) => console.log(err)
    })
  }


  ngOnInit(): void {
    this.getData()
    this.showData()
    this.contentHeader = {
      headerTitle: 'Chartjs',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Charts & Maps',
            isLink: true,
            link: '/'
          },
          {
            name: 'Chartjs',
            isLink: false
          }
        ]
      }
    };



  }




  // Bar Chart
  public barChart = {
    chartType: 'bar',
    datasets: [
      {
        data: this.count,
        backgroundColor: this.successColorShade,
        borderColor: 'transparent',
        hoverBackgroundColor: this.successColorShade,
        hoverBorderColor: this.successColorShade
      }
    ],
    labels: [],
    options: {
      elements: {
        rectangle: {
          borderWidth: 2,
          borderSkipped: 'bottom'
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        display: false
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: this.tooltipShadow,
        backgroundColor: colors.solid.white,
        titleFontColor: colors.solid.black,
        bodyFontColor: colors.solid.black
      },
      scales: {
        xAxes: [
          {
            barThickness: 15,
            display: true,
            gridLines: {
              display: true,
              color: this.grid_line_color,
              zeroLineColor: this.grid_line_color
            },
            scaleLabel: {
              display: true
            },
            ticks: {
              fontColor: this.labelColor
            }
          }
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: this.grid_line_color,
              zeroLineColor: this.grid_line_color
            },
            ticks: {
              stepSize: 5,
              min: 0,
              max: 10,
              fontColor: this.labelColor
            }
          }
        ]
      }
    },
    legend: false
  };


  //** To add spacing between legends and chart
  public plugins = [
    {
      beforeInit(chart) {
        chart.legend.afterFit = function () {
          this.height += 20;
        };
      }
    }
  ];





}
