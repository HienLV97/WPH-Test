import cypress from "cypress"
import { data, type } from "cypress/types/jquery";
import { Children } from "react"
import "cypress-real-events";
import { constant } from "lodash";
import { beforeEach } from "mocha";
import { stringify } from "gray-matter";
Cypress.config('baseUrl', 'https://kamora:iamafriend@writersperhour.dev/')
function getURL(getUrl) {
    cy.visit('/')
    cy.get('a').each(($link) => {
        console.log($link)
        var newURL = $link.prop('href')
        console.log(newURL)
        cy.wrap(newURL).as('newURL1')
        Cypress.env('textURL', newURL);
        console.log('Hien1: '+newURL)
    })
}



function checkLink(link) {
    cy.visit('/')
    cy.get("title").should("not.have.text", "Page Not Found - Writers Per Hour")

}
// const newURL = ["/signin", "/:buy-capstone-project", "/order"]

describe("Test all links", () => {
    //  const links = ['/about-us','/signin']
    it("take URL", () => {
        cy.visit('/')

    })
    describe("Test URL", () => {
        it(`Check url ${Cypress.env('textURL')}`, () => {
            cy.visit(Cypress.env('textURL'))
            //  console.log(link)
            //  cy.wrap(link).as('url')
            //  checkLink(link)
            cy.get("title").should("not.have.text", "Page Not Found - Writers Per Hour")
        })
    })
})




BLOG - page 1
/term-paper-vs-research-paper
/tips-to-choose-strong-analysis-paper-topics
/best-practices-for-writing-college-summary
/how-to-fluff-an-essay
/how-to-write-a-dissertation-defense
/how-to-increase-your-typing-speed
BLOG - page 2
/how-to-write-an-executive-summary-for-an-essay
/what-is-dbq-essay
/how-to-write-a-good-professional-summary-for-a-resume
/how-to-write-an-executive-summary-for-an-essay
/what-is-dbq-essay
/how-to-write-a-good-professional-summary-for-a-resume
BLOG - page 3
/where-to-find-relevant-sources-for-your-research-paper
/extended-essay-topics-for-ib
/rebuttal-in-argumentative-essay
/how-to-write-a-hook-for-an-argumentative-essay
/how-significant-are-opposing-points-of-view-in-an-argument
/how-to-write-a-professional-email-asking-for-an-internship
BLOG - page  4
/good-ways-to-start-a-conclusion-sentence
/argumentative-essay-dos-and-donts
/how-to-write-extended-project-qualification-essay
/how-to-write-a-good-lesson-plan
/best-online-jobs-for-students
/best-notetaking-apps-for-college-students
BLOG -page 5
/scholarship-application-essay-tips-that-will-get-you-accepted
/tok-exhibition-objects-ideas-to-consider
/active-voice-vs-passive-voice-in-essay-writing
/what-is-formal-academic-writing
/chemistry-ia-checklist-to-consider-for-acing-your-paper
/how-do-you-write-a-character-analysis
BLOG - page 6
/how-to-start-a-book-review-essay
/how-to-edit-college-essay-fast
/creative-college-powerpoint-presentation-topics
/how-to-write-coursework-quickly
/professor-found-that-i-paid-someone-to-write-my-essay
/what-is-signposting-in-an-essay
BLOG  - page 7
/when-is-paraphrasing-plagiarism
/essay-writing-hacks-to-write-high-scoring-essays
/how-to-write-conclusion-for-an-essay
/how-to-write-an-essay-introduction
/how-to-write-an-essay-outline
/what-is-a-prompt-in-writing-an-essay
BLOG - page 8
/steps-of-writing-an-essay
/how-to-write-an-essay-paper
/how-to-write-a-reverse-outline
/tips-to-get-along-with-your-roommate
/how-to-write-a-case-study-paper-in-apa-format
/how-to-write-a-tok-exhibition-essay
BLOG - page 9
/how-to-revise-an-essay-in-college
/how-to-write-an-appendix-for-a-research-paper
/personal-narrative-ideas-for-high-school
/how-to-write-a-cause-and-effect-essay-for-college
/writing-strategies-for-esl-students
/creative-graduation-speech-ideas-standing-ovation
BLOG - page 10
/writing-letter-of-intent-for-college
/how-to-write-a-resume-for-a-college-internship
/how-do-you-write-an-interview-paper
/reading-exercises-for-high-school-students
/how-do-you-write-a-good-thesis-statement
/strong-transition-words-for-essays
BLOG - page 11
/how-to-conduct-secondary-research-for-your-essay
/best-websites-college-students-should-know-for-writing-essays
/how-to-write-interesting-essays
/how-to-outline-literature-review
/can-you-get-in-trouble-for-plagiarizing-yourself
/best-persuasive-essay-topics-to-get-you-inspired
BLOG - page 12
/how-to-start-commemorative-speech
/how-to-write-a-1000-word-essay-in-one-night
/how-to-analyze-a-short-story-step-by-step
/how-to-write-an-analytical-essay-on-a-book
/how-to-take-good-lecture-notes
/how-to-write-a-college-reflection-paper
BLOG - page 13
/how-to-request-for-a-letter-of-recommendation-from-your-professor
/spatial-order-organization-what-is-it-and-how-to-use-it-in-essay-writing
/how-to-create-an-essay-title
/tips-for-writing-synthesis-essay
/how-to-type-an-email-to-professor
/how-to-write-a-5-paragraph-compare-and-contrast-essay
BLOG - page 14
/what-to-pack-for-college-freshman-year
/how-to-make-an-essay-longer-than-it-really-is
/how-to-write-college-research-paper-outline
/mental-health-tips-for-college-students
/how-to-manage-negative-feedback-for-your-college-essay
/good-argumentative-essay-topics
BLOG - page 15
/complete-essay-checklist-for-students
/how-to-write-introduction-for-argumentative-essay
/how-to-write-lab-report-introduction
/useful-college-essay-writing-tips-for-stellar-paper
/top-notch-mba-research-topic-examples-to-qrite-paper
/12-common-college-essay-mistakes-you-should-avoid
BLOG - page 16
/how-write-movie-review-college
/what-is-explanatory-essay-and-how-to-get-started
/tips-how-to-write-ib-extended-essay
/steps-writing-rhetorical-analysis-essay-effectively
/psychology-research-paper-writing-guide-you-need
/how-to-motivate-yourself-to-write-a-college-essay
BLOG - page 17
/history-internal-assessment-topic-ideas-for-ib-students
/college-student-guide-to-writing-about-theology-and-religion
/how-college-students-can-use-literary-devices-to-improve-their-essay-writing
/guide-to-writing-the-perfect-cv-for-your-masters-application
/complete-guide-to-writing-a-reflective-essay-for-university
/how-to-choose-a-chemistry-ia-topic-for-ib-standard-level
BLOG - page 18
/college-student-guide-to-improve-creative-writing-skills
/essential-study-tips-for-academic-success
/what-include-in-an-activities-resume-for-college-admissions
/how-to-write-strong-conclusion-paragraph-argumentative-essay
/how-to-use-rhetorical-questions-in-an-essay
/6-surefire-ways-to-avoid-plagiarism-in-essays
BLOG - page 19
/6-mistakes-that-will-ruin-your-personal-statement-for-grad-school
/20-biology-internal-assessment-topic-ideas-for-ib-standard-level
/how-to-write-and-format-mba-essay-that-gets-noticed
/20-math-internal-assessment-topic-ideas-for-ib-standard-level
/10-tips-student-must-apply-to-write-an-engaging-essay
/how-to-write-a-reaction-paper-on-an-article
BLOG - page 20
/elements-of-good-research-proposal
/how-to-write-a-shakespeare-essay
/how-to-write-strong-discussion-post
/write-10000-word-undergraduate-dissertation-in-16-days
/7-tips-write-research-paper-which-is-due-tomorrow
/6-tips-how-to-write-personal-statement-mba
BOG - page 21
/tips-writing-last-minute-essay-for-college
/how-to-choose-right-elearning-course
/how-analyze-ethical-considerations-marketing-practices
/how-to-write-a-college-essay
/65-essay-topics-for-high-school-students
/how-to-write-a-book-critique
BLOG - page 22
/leadership-essay
/essay-hooks
/how-to-write-discussion-section-in-lab-report
/how-to-write-care-plan-for-nursing-school
/how-to-write-500-word-essay-for-scholarships
/how-to-write-tok-essay
BLOG - page 23
/resume-writing-tips-for-college-freshers
/what-is-capstone-project-in-graduate-school
/stress-management-tips-for-students


