export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>
          
          <div className="wd-dashboard-course">
            <img src="/images/5610.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/5610/Home">
                CS5610 Web Dev
              </a>
              <p className="wd-dashboard-course-title">
                Web Development
              </p>
              <a href="#/Kanbas/Courses/5610/Home"> Go </a>
            </div>
          </div>
          
          <div className="wd-dashboard-course">
            <img src="/images/6140.png" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/6140/Home">
                CS6140 Machine Learning
              </a>
              <p className="wd-dashboard-course-title">
                Machine Learning
              </p>
              <a href="#/Kanbas/Courses/6140/Home"> Go </a>
            </div>
          </div>
          
          <div className="wd-dashboard-course">
            <img src="/images/7980.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/7980/Home">
                CS7980 Capstone
              </a>
              <p className="wd-dashboard-course-title">
                Capstone Project
              </p>
              <a href="#/Kanbas/Courses/7980/Home"> Go </a>
            </div>
          </div>
          
          <div className="wd-dashboard-course">
            <img src="/images/5100.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/5100/Home">
                CS5100 Foundations of AI
              </a>
              <p className="wd-dashboard-course-title">
                Foundations of Artificial Intelligence
              </p>
              <a href="#/Kanbas/Courses/5100/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/5200.png" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/5200/Home">
                CS5200 Database Management Systems
              </a>
              <p className="wd-dashboard-course-title">
                Database Management Systems
              </p>
              <a href="#/Kanbas/Courses/5200/Home"> Go </a>
            </div>
          </div>
          
          <div className="wd-dashboard-course">
            <img src="/images/5800.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/5800/Home">
                CS5800 Algorithms
              </a>
              <p className="wd-dashboard-course-title">
                Algorithms
              </p>
              <a href="#/Kanbas/Courses/5800/Home"> Go </a>
            </div>
          </div>
          
        </div>
      </div>
  );}
  